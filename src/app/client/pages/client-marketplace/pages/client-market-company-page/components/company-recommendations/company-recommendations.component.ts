import {Component, inject, Input, OnInit} from '@angular/core';
import {PublicCompanyInfoModel} from "../../../../../../../core/models/public-company-info.model";
import {getName} from "country-list";
import {B2bNgxIconModule} from "@b2b/ngx-icon";
import {AsyncPipe, UpperCasePipe} from "@angular/common";
import {BehaviorSubject, combineLatest, from, Observable} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {AuthService} from "../../../../../../../auth/services/auth/auth.service";
import {first, map} from "rxjs/operators";
import {CategoriesService} from "../../../../../../services/categories/categories.service";
import {CategoryListingService} from "../../../category-listing/category-listing.service";
import {Router, RouterLink} from "@angular/router";
import {io} from "socket.io-client";
import {environment} from "../../../../../../../../environments/environment";
import {UserService} from "../../../../../client-profile/services/user/user.service";
import {DialogService} from "../../../../../../../core/services/dialog-service/dialog.service";

@UntilDestroy()
@Component({
	selector: 'b2b-company-recommendations',
	standalone: true,
	imports: [
		B2bNgxIconModule,
		UpperCasePipe,
		AsyncPipe,
		RouterLink
	],
	templateUrl: './company-recommendations.component.html',
	styleUrl: './company-recommendations.component.scss'
})
export class CompanyRecommendationsComponent implements OnInit {
	@Input() recommendations: PublicCompanyInfoModel[];

	public userIsAuth: boolean;
	public recommendationsCategories$: BehaviorSubject<Array<string[]>> = new BehaviorSubject<Array<string[]>>([]);
	private authService: AuthService = inject(AuthService);

	private socket: any;
	private token: string;
	private categoryService: CategoryListingService = inject(CategoryListingService);
	private userService: UserService = inject(UserService);
	private dialogService: DialogService = inject(DialogService);
	private router: Router = inject(Router);



	ngOnInit() {
		this.userIsAuth = this.userService.isAuth();
		this.generateCategoriesArr(this.recommendations);
		this.userService.getToken$().subscribe((token) => {
			this.token = token;
			this.openConnection(this.token);
		});
	}
	public getMediaSrc(url: string): string {
		return environment.apiUrl + url;
	}

	private generateCategoriesArr(recommendations: PublicCompanyInfoModel[]): void {
		for (const companyInfo of recommendations) {
			const categories = companyInfo?.categories || [];
			const storageCategories = this.authService?.company?.categories || [];
			const set = new Set(categories.concat(storageCategories))

			this.categoryService.getSectorsNamesArr(
				[...set.values()]
			).pipe(first()).subscribe(res => {
				const t = this.recommendationsCategories$.value;
				t.push(res);
				this.recommendationsCategories$.next(t)
			});
		}
	}

	public openChat(event: MouseEvent, userId: string): void {
		event.stopPropagation();

		if (!this.userIsAuth) {
			this.dialogService.notifyWhenUserNotLoggedIn();
		} else {
			this.openConnection(this.token);
			this.socket.emit('start_users_chat', {
				userId,
				typeRoom: 'users',
			});

			this.socket.on('users_chat_info', (data: any) => {
				this.goTo('profile/your-workspace/b2bmarket/chat/' + data._id);
			});
		}
	}

	public goTo(link: string) {
		this.router.navigate([link]);
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


	public getBusinessType(businessTypeId: string): Observable<string> {
		return combineLatest([from([businessTypeId]), this.authService.getRoles()])
			.pipe(
				first(),
				map(([companyInfo, roles]) => {
					const foundRoleById = roles.find(
						(role) => role._id === businessTypeId
					);
					if (foundRoleById) {
						return	foundRoleById.displayName
					} else {
						return 'Unknown';
					}
				}))
	}

}
