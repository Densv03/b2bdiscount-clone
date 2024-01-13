import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	OnInit,
} from '@angular/core';
import { B2bNgxButtonModule, B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { UserService } from 'src/app/client/pages/client-profile/services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedModule } from '../../../../shared/components/shared.module';
import { ClaimButtonsClassesEnum } from '../../../../shared/enums/claim-buttons-classes.enum';
import { ApplicationSectionsEnum } from '../../../../shared/enums/application-sections.enum';
import { BehaviorSubject, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CreateRfqDialogComponent } from '../../../client-sourcing-request/components/create-rfq-dialog/create-rfq-dialog.component';
import { MixpanelService } from '../../../../../core/services/mixpanel/mixpanel.service';

type userRoles = 'unauthorized' | 'buyer' | 'supplier';

@Component({
	selector: 'b2b-client-marketplace-banner',
	templateUrl: './client-marketplace-banner.component.html',
	styleUrls: ['./client-marketplace-banner.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule, B2bNgxButtonModule, SharedModule],
})
export class ClientMarketplaceBannerComponent implements OnInit, AfterViewInit {
	@Input() siteSection: ApplicationSectionsEnum;
	public b2bNgxButtonTheme = B2bNgxButtonThemeEnum;
	public claimButtonClasses = ClaimButtonsClassesEnum;
	public bannerTextSource: BehaviorSubject<string> = new BehaviorSubject('');
	public buttonSource: Subject<{ text: string; link: string }> = new Subject();

	private bannerText: any = {
		market: {
			unauthorized: {
				text:
					"Didn't find what you were looking for?\n" +
					'Leave a Sourcing Request and suppliers will contact you.',
				button: {
					text: 'Add RFQ',
					link: '/auth/register-credentials',
				},
			},
			buyer: {
				text:
					"Didn't find what you were looking for?\n" +
					'Leave a Sourcing Request and suppliers will contact you.',
				button: {
					text: 'Add RFQ',
					link: '',
					modal: CreateRfqDialogComponent,
				},
			},
			supplier: {
				text:
					'Want to sell your products?\n' +
					'Upload them here and buyers will contact you.',
				button: {
					text: 'Add Product',
					link: '/b2bmarket/product',
				},
			},
		},
		sourcingRequest: {
			unauthorized: {
				text: "Haven't found buyers in this section? Upload your product to B2B Market, and they will contact you.",
				button: {
					text: 'Add Product',
					link: '/auth/register-credentials',
				},
			},
			buyer: {
				text: 'Need relevant offers from sellers? Submit a sourcing request.',
				button: {
					text: 'Add RFQ',
					link: '',
					modal: CreateRfqDialogComponent,
				},
			},
			supplier: {
				text: "Haven't found buyers in this section? Upload your product to B2B Market, and they will contact you.",
				button: {
					text: 'Add Product',
					link: '/b2bmarket/product',
				},
			},
		},
		unclaimedCargo: {
			unauthorized: {
				text:
					"Didn't find what you were looking for?\n" +
					'Leave a Sourcing Request and suppliers will contact you.',
				button: {
					text: 'Add RFQ',
					link: '/auth/register-credentials',
				},
			},
			buyer: {
				text:
					"Didn't find what you were looking for?\n" +
					'Leave a Sourcing Request and suppliers will contact you.',
				button: {
					text: 'Add RFQ',
					link: '',
					modal: CreateRfqDialogComponent,
				},
			},
			supplier: {
				text: 'Looking for buyers of unclaimed cargo? Upload your product here and let them  contact you.',
				button: {
					text: 'Add Cargo',
					link: '//offer',
				},
			},
		},
	};

	constructor(
		private userService: UserService,
		private dialog: MatDialog,
		private router: Router,
		private cdr: ChangeDetectorRef,
		private readonly mixpanelService: MixpanelService
	) {}

	ngOnInit(): void {}

	ngAfterViewInit() {
		setTimeout(() => {
			this?.bannerTextSource.next(this.getBannerText());
			this?.buttonSource.next(
				this.bannerText[this.siteSection][this.detectUserRole()]?.button
			);
			this.cdr.detectChanges();
		}, 200);
	}

	processBannerButtonClick(button: any): void {
		this.mixpanelService.track('banner clicked', {
			URL: location.host + this.router.url,
			'Account Type': this.detectUserRole(),
		});

		if (button.modal) {
			this.dialog.open(button.modal, {
				panelClass: ['add-rfq-popup', 'contact-supplier-form-dialog'],
			});
		} else {
			this.router.navigate([button.link]);
		}
	}

	getBannerText(): string {
		if (this.siteSection) {
			return this.bannerText[this.siteSection]?.[this.detectUserRole()]?.text;
		}
		return '';
	}

	private detectUserRole(): userRoles {
		const user = this.userService.getUser();
		if (!user) {
			return 'unauthorized';
		} else {
			return user.rootRole?.name;
		}
	}
}
