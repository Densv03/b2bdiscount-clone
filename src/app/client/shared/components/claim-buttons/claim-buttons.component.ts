import { Component, Input, OnInit } from '@angular/core';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CreateRfqDialogComponent } from '../../../pages/client-tradebid/components/create-rfq-dialog/create-rfq-dialog.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserService } from '../../../pages/client-profile/services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ClaimButtonsClassesEnum } from '../../enums/claim-buttons-classes.enum';
import { MixpanelService } from '../../../../core/services/mixpanel/mixpanel.service';

@UntilDestroy()
@Component({
	selector: 'b2b-claim-buttons',
	templateUrl: './claim-buttons.component.html',
	styleUrls: ['./claim-buttons.component.scss'],
})
export class ClaimButtonsComponent implements OnInit {
	@Input() buttonTheme: B2bNgxButtonThemeEnum;
	@Input() buttonClass: ClaimButtonsClassesEnum;
	public readonly b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public addOfferUrl: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
		false
	);
	public makeRfqUrl: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
		false
	);
	public addProductUrl: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
		false
	);

	public supplierOrAdmin$: Observable<boolean> = of(false);
	public isBuyer$: Observable<boolean> = of(false);
	public isAuth$: Observable<boolean> = of(false);

	private accountType: string;

	constructor(
		private readonly userService: UserService,
		private readonly dialog: MatDialog,
		private readonly router: Router,
		private readonly mixpanelService: MixpanelService
	) {}

	ngOnInit(): void {
		this.checkUser();
		this.router.events
			.pipe(filter((event) => event instanceof NavigationStart))
			.subscribe((el: any) => {
				el.url.includes('offers')
					? this.addOfferUrl.next(true)
					: this.addOfferUrl.next(false);
				el.url.includes('tradebid/listing')
					? this.makeRfqUrl.next(true)
					: this.makeRfqUrl.next(false);
				el.url.includes('b2bmarket')
					? this.addProductUrl.next(true)
					: this.addProductUrl.next(false);
			});

		this.router.url.includes('offers')
			? this.addOfferUrl.next(true)
			: this.addOfferUrl.next(false);
		this.router.url.includes('tradebid/listing')
			? this.makeRfqUrl.next(true)
			: this.makeRfqUrl.next(false);
		this.router.url.includes('b2bmarket')
			? this.addProductUrl.next(true)
			: this.addProductUrl.next(false);
	}

	public openCreateRfqDialog(): void {
		if (this.userService.getUser()) {
			this.dialog.open(CreateRfqDialogComponent, {
				maxHeight: '705px',
				maxWidth: '950px',
				panelClass: 'add-rfq-popup',
			});
			this.track();
		} else {
			this.router.navigate(['/auth/register-credentials']);
		}
	}

	public track(): void {
		this.mixpanelService.track('button in header clicked', {
			URL: location.host + this.router.url,
			'Account Type': this.accountType,
		});
	}

	private checkUser(): void {
		this.userService
			.getUser$()
			.pipe(untilDestroyed(this))
			.subscribe((user) => {
				this.isAuth$ = of(!!user);
				this.supplierOrAdmin$ = of(
					user?.rootRole?.name === 'supplier' || user.role.name === 'admin'
				);
				this.accountType = user?.rootRole?.name;
				this.isBuyer$ = of(user?.rootRole?.name === 'buyer');
			});
	}
}
