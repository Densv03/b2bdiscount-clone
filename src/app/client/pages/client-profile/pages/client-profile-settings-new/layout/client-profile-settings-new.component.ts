import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit,} from '@angular/core';
import {
	ClientProfileSettingsTabsComponent
} from '../component/client-profile-settings-tabs/client-profile-settings-tabs.component';
import {
	ClientProfileSettingsImageUploaderComponent
} from '../component/client-profile-settings-image-uploader/client-profile-settings-image-uploader.component';
import {PageTab, TabLabel} from '../client-profile-settings.type';
import {
	ClientCompanyInformationComponent
} from '../tabs/client-company-information/client-company-information.component';
import {AsyncPipe, JsonPipe, NgClass} from '@angular/common';
import {
	ClientPaymentAndShippingComponent
} from '../tabs/client-payment-and-shipping/client-payment-and-shipping.component';
import {ClientAdvantagesComponent} from '../tabs/client-advantages/client-advantages.component';
import {ClientDocumentsComponent} from '../tabs/client-documents/client-documents.component';
import {ClientTradeShowsComponent} from "../tabs/client-trade-shows/client-trade-shows.component";
import {B2bNgxButtonModule, B2bNgxButtonThemeEnum} from "@b2b/ngx-button";
import {
	ClientProfileSettingsTabsService
} from "../component/client-profile-settings-tabs/client-profile-settings-tabs.service";
import {firstValueFrom, ReplaySubject} from "rxjs";
import {CanComponentDeactivate} from "../guard/form-save.guard";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
	ClientProfileDefaultModalComponent
} from "../component/client-profile-default-modal/client-profile-default-modal.component";
import {DefaultModalData} from "../component/client-profile-default-modal/client-profile-default-modal.interface";
import _ from "lodash";
import {AuthService} from "../../../../../../auth/services/auth/auth.service";
import {PublicCompanyInfoModel} from "../../../../../../core/models/public-company-info.model";
import {environment} from "../../../../../../../environments/environment";
import {ClientMediaComponent} from "../tabs/client-media/client-media.component";
import {ActivatedRoute} from "@angular/router";
import {defaultTab, tabs} from "../component/client-profile-settings-tabs/client-profile-settings-tabs.constant";

@Component({
	selector: 'b2b-client-profile-settings-new',
	standalone: true,
	imports: [
		ClientProfileSettingsTabsComponent,
		ClientProfileSettingsImageUploaderComponent,
		ClientCompanyInformationComponent,
		JsonPipe,
		ClientPaymentAndShippingComponent,
		ClientAdvantagesComponent,
		ClientDocumentsComponent,
		ClientTradeShowsComponent,
		B2bNgxButtonModule,
		AsyncPipe,
		NgClass,
		ClientMediaComponent,
	],
	providers: [
		ClientProfileSettingsTabsService,
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {overlayPanelClass: 'w-full  md:max-w-[80vw]'}
		}
	],
	templateUrl: './client-profile-settings-new.component.html',
	styleUrl:
		'./client-profile-settings-new.component.scss',
	changeDetection:
	ChangeDetectionStrategy.OnPush,
})

export class ClientProfileSettingsNewComponent implements CanComponentDeactivate, OnInit {
	tab$ = new ReplaySubject<PageTab>(2)
	public disabled = false;
	protected readonly TabLabel = TabLabel;

	constructor(private cdr: ChangeDetectorRef,
							private tabservice: ClientProfileSettingsTabsService<any>,
							private matDialog: MatDialog,
							private authService: AuthService) {
	}

	@HostListener('window:beforeunload', ['$event'])
	async unloadNotification(e: any) {
		if (!environment.production) {
			return;
		}
		// Cancel the event as stated by the standard.
		e.preventDefault();
		// Chrome requires returnValue to be set.
		e.returnValue = '';
	}

	ngOnInit() {
		this.checkNewUser();
	}

	async canDeactivate() {
		await this.initSave();
		return true;
	}

	changeTab($event: PageTab) {
		this.tab$.next($event);
		this.cdr.detectChanges();
	}

	async initSave() {
		if (await this.tabservice.isActivationPossible()) {
			await this.tabservice.initSaveModal(null);
			return;
		}
		const res = await firstValueFrom(this.tabservice.openTabChangeModal().afterClosed());
		if (res) {
			await this.tabservice.initSaveModal(this.tabservice.activeTab);
		}
	}

	checkNewUser() {
		const user = this.authService.user
		const requiredKeys: (keyof PublicCompanyInfoModel)[] = ['companyName', 'companyDescription', 'businessType', 'employeesNumber', 'yearOfFoundation', 'address']
		const pick = _.pick(this.authService.company, requiredKeys)
		const values = _.values(pick);
		const isShowed = localStorage.getItem('supplier-pop-up');
		if (!isShowed && requiredKeys.length > values.length && user.rootRole.name === 'supplier'
		) {
			this.initFirstRegistrationPopup();
		}
	}

	async initFirstRegistrationPopup() {
		this.matDialog.open(ClientProfileDefaultModalComponent, {
			data: {
				label: 'Update your data',
				title: 'Fill your data',
				description: 'You need to fill out your company to profile to be able to upload your products.',
				buttons: [
					{
						label: 'Got it!',
						result: true,
						theme: B2bNgxButtonThemeEnum.BACKGROUND_BLUE
					}
				]
			}
		} as MatDialogConfig<DefaultModalData<boolean>>).afterClosed().subscribe(res => {
			localStorage.setItem('supplier-pop-up', 'true')
		})
	}

	protected readonly tabs = tabs;
}
