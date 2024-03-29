import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	Inject,
	Input,
	OnInit,
	ViewChild,
} from '@angular/core';
import {
	PublicCompanyInfoModel,
	SocialMedia,
} from '../../../../../../../core/models/public-company-info.model';
import { CategoryListingService } from '../../../category-listing/category-listing.service';
import { Observable, combineLatest, from, BehaviorSubject } from 'rxjs';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { AuthService } from '../../../../../../../auth/services/auth/auth.service';
import { DOCUMENT } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserService } from '../../../../../client-profile/services/user/user.service';
import { User } from '../../../../../../../core/models/user/user.model';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
import { environment } from '../../../../../../../../environments/environment';
import {getName} from "country-list";

@UntilDestroy()
@Component({
	selector: 'b2b-market-company-information',
	templateUrl: './market-company-information.component.html',
	styleUrls: ['./market-company-information.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketCompanyInformationComponent implements OnInit {
	@Input() companyInfo: PublicCompanyInfoModel;
	@ViewChild('documentEl') documentEl: ElementRef;

	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public companyCategories$: Observable<string[]>;
	public businessType$: Observable<string>;

	public user: User = this.userService.getUser();
	public companyInformationOptions: Array<{
		label: string;
		value: keyof PublicCompanyInfoModel;
	}> = this.getCompanyInformationOptions();
	private userIsAuth = this.userService.isAuth();
	private socket: any;
	private businessTypeSource: BehaviorSubject<string> =
		new BehaviorSubject<string>('');
	private token: string;

	constructor(
		private router: Router,
		private authService: AuthService,
		private userService: UserService,
		private categoryService: CategoryListingService,
		@Inject(DOCUMENT) private document: any
	) {
		this.businessType$ = this.businessTypeSource.asObservable();

	}

	ngOnInit(): void {
		this.updateBusinessType();
		this.companyCategories$ = this.generateCategoriesArr();
		this.userService.getToken$().subscribe((token) => {
			this.token = token;
			this.openConnection(this.token);
		});
	}
	public socialMediaHasNonEmptyValue(socialMedia: SocialMedia): boolean {
		return Object.values(socialMedia).some(item => !!item.trim().length)
	}
	public openChat(event: MouseEvent): void {
		if (!this.userIsAuth) {
			this.router.navigate(['profile/your-workspace/b2bmarket']);
		} else {
			this.openConnection(this.token);
			this.socket.emit('start_users_chat', {
				userId: this.companyInfo.user,
				typeRoom: 'users',
			});

			this.socket.on('users_chat_info', (data: any) => {
				this.goTo('profile/your-workspace/b2bmarket/chat/' + data._id);
			});
		}
	}
	public convertObjectToArray(objectToConvert: SocialMedia): any[] {
		return Object.entries(objectToConvert).map(([key, value]) => ({
			key,
			value,
		}));
	}
	private updateBusinessType(): void {
		combineLatest([from([this.companyInfo]), this.authService.getRoles()])
			.pipe(untilDestroyed(this))
			.subscribe(([companyInfo, roles]) => {
				const foundRoleById = roles.find(
					(role) => role._id === companyInfo.businessType
				);

				if (foundRoleById) {
					this.businessTypeSource.next(foundRoleById.displayName);
				} else {
					this.businessTypeSource.next(companyInfo.businessType);
				}
			});
	}
	public goTo(link: string) {
		this.router.navigate([link]);
	}
	private generateCategoriesArr(): Observable<string[]> {
		const categories = this.companyInfo?.categories || [];
		const storageCategories = this.authService?.company?.categories || [];
		const set = new Set(categories.concat(storageCategories))
		return this.categoryService.getSectorsNamesArr(
			[...set.values()]
		);
	}

	private openConnection(token: string): void {
		if (this.socket) {
			this.socket.disconnect();
		}

		this.socket = io(environment.apiUrl, {
			path: '/chat',
			auth: {
				token,
			},
		});
	}
	private getCompanyInformationOptions(): Array<{
		label: string;
		value: keyof PublicCompanyInfoModel;
	}> {
		return [
			{
				label: 'Business type',
				value: 'businessType',
			},
			{
				label: 'Product category',
				value: 'categories',
			},
			{
				label: 'Year established',
				value: 'yearOfFoundation',
			},
			{
				label: 'Numbers of employees',
				value: 'employeesNumber',
			},
			{
				label: 'Annual revenue',
				value: 'annualRevenue',
			},
			{
				label: 'Country',
				value: 'country',
			},
			{
				label: 'Company address',
				value: 'address',
			},
			{
				label: 'Official resources',
				value: 'socialMedia',
			},
		];
	}

	protected readonly getName = getName;
}
