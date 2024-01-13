import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { User } from '../../../../../../../core/models/user/user.model';
import { B2bNgxLinkService } from '@b2b/ngx-link';
import { UserService } from '../../../../../client-profile/services/user/user.service';
import { AuthService } from '../../../../../../../auth/services/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { checkSerialNumber } from '../../../../../../../core/helpers/function/check-serial-number';
import { Photo } from '../../../../../../../core/models/photo.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { getName } from 'country-list';
import { words } from 'lodash';

@UntilDestroy()
@Component({
	selector: 'b2b-market-product-item',
	templateUrl: './market-product-item.component.html',
	styleUrls: ['./market-product-item.component.scss'],
})
export class MarketProductItemComponent implements OnInit {
	@Input() customClass: string;
	@Input() product: any;

	public params: Params;
	public readonly user$: Observable<User> = this.userService.getUser$();
	public productPhoto: string[];
	private token: string = '';

	constructor(
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		private readonly userService: UserService,
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute
	) {}

	public ngOnInit(): void {
		this.productPhoto =
			this.product.photos?.every((photo: any) => 'serialNumber' in photo) &&
			checkSerialNumber(this.product.photos)
				? this.product.photos?.reduce((acc: any[], val: any) => {
						acc[val?.serialNumber] = val?.lg;
						return acc.filter((el) => !!el);
				  }, [])
				: this.product?.photos
						?.filter((el: Photo) => el?.lg)
						?.map((el: Photo) => el?.lg);

		combineLatest([this.activatedRoute.params, this.activatedRoute.queryParams])
			.pipe(untilDestroyed(this))
			.subscribe(([params, queryParams]) => {
				if (this.router.url.includes('b2bmarket')) {
					this.params = {
						...queryParams,
						companyId: params['companyId'] || null,
						category: params['category'] || null,
						childCategory: params['childCategory'] || null,
					};
				}
			});

		this.userService.getToken$().subscribe((token) => {
			this.token = token;
		});
	}

	public cutString(title: string, maxSymbolsAmount: number): string {
		return title?.length > maxSymbolsAmount
			? `${title.slice(0, maxSymbolsAmount)}...`
			: title;
	}
}
