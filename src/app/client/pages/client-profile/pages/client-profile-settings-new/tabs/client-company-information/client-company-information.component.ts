import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {
	ClientProfileSettingsImageUploaderComponent
} from '../../component/client-profile-settings-image-uploader/client-profile-settings-image-uploader.component';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {B2bNgxInputModule, B2bNgxInputThemeEnum} from '@b2b/ngx-input';
import {NgxInputVersionEnum} from '../../../../../../../../../projects/ngx-input/src/lib/enum/ngx-input-version.enum';
import {B2bNgxDividerModule} from '@b2b/ngx-divider';
import {B2bNgxSelectModule, B2bNgxSelectThemeEnum} from '@b2b/ngx-select';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {
	NgxSelectVariantEnum
} from '../../../../../../../../../projects/ngx-select/src/lib/enums/ngx-select-variant.enum';
import {MatIcon} from '@angular/material/icon';
import {SocialMediaForm, socialMedias} from './social-medias.const';
import _ from 'lodash';
import {MatButton} from '@angular/material/button';
import {ClientCompanyInformationService} from './client-company-information.service';
import {AsyncPipe, JsonPipe, NgClass, NgIf} from '@angular/common';
import {Observable} from 'rxjs';
import {ANNUAL_REVENUE_LIST, EMPLOYEES_NUMBER_LIST, transformToSelect,} from './client-company-information.constants';
import {B2bNgxCountrySelectModule} from '@b2b/ngx-country-select';
import {B2bNgxButtonModule} from '@b2b/ngx-button';
import {AuthService} from '../../../../../../../auth/services/auth/auth.service';
import {
	UploadResult
} from '../../component/client-profile-settings-image-uploader/client-profile-settings-image-uploader.interface';
import {
	ClientProfileMobileToolbarComponent
} from "../../component/client-profile-mobile-toolbar/client-profile-mobile-toolbar.component";
import {MatDialog} from "@angular/material/dialog";
import {
	ClientProfileSocialMediaModalComponent
} from "../../component/client-profile-social-media-modal/client-profile-social-media-modal.component";
import {debounceTime, first} from "rxjs/operators";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {PublicCompanyInfoModel} from "../../../../../../../core/models/public-company-info.model";
import {
	ClientProfileSettingsTabsService
} from "../../component/client-profile-settings-tabs/client-profile-settings-tabs.service";
import {PageTab, TabLabel} from "../../client-profile-settings.type";

@UntilDestroy()
@Component({
	selector: 'b2b-client-company-information',
	standalone: true,
	imports: [
		ClientProfileSettingsImageUploaderComponent,
		MatFormField,
		MatLabel,
		MatInput,
		B2bNgxInputModule,
		B2bNgxDividerModule,
		B2bNgxSelectModule,
		ReactiveFormsModule,
		MatIcon,
		MatButton,
		NgClass,
		AsyncPipe,
		NgIf,
		B2bNgxCountrySelectModule,
		B2bNgxButtonModule,
		ClientProfileMobileToolbarComponent,
		MatError,
		JsonPipe,
	],
	providers: [ClientCompanyInformationService],
	templateUrl: './client-company-information.component.html',
	styleUrl: './client-company-information.component.scss',
})
export class ClientCompanyInformationComponent implements OnInit, AfterViewInit {

	@Input() initSave$: Observable<Boolean> = new Observable<Boolean>();

	public socialMedias = _.cloneDeep(socialMedias);
	public form: FormGroup = this.clientCompanyInformationService.initForm();
	public rootRoles$ = new Observable();
	public company = this.authService.company;
	public readonly annualRevenueList = transformToSelect(ANNUAL_REVENUE_LIST);
	public readonly employeesNumberList = transformToSelect(EMPLOYEES_NUMBER_LIST);
	public readonly yearOfFoundationList = this.clientCompanyInformationService.yearOfFoundationList;
	protected readonly B2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	protected readonly NgxInputVersionEnum = NgxInputVersionEnum;
	protected readonly NgxSelectVariantEnum = NgxSelectVariantEnum;
	protected readonly B2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	private initialFormValue: PublicCompanyInfoModel;

	constructor(
		private authService: AuthService,
		protected clientCompanyInformationService: ClientCompanyInformationService,
		private matDialog: MatDialog,
		private cdr: ChangeDetectorRef,
		private clientProfileSettingsTabsService: ClientProfileSettingsTabsService<PublicCompanyInfoModel>
	) {
		this.rootRoles$ = this.clientCompanyInformationService.rootRoles$;
	}

	get website() {
		return this.form.get('website');
	}

	get isAdmin() {
		return this.clientCompanyInformationService.isAdmin;
	}

	get socialMedia() {
		return this.form.get('socialMedia');
	}

	get isEqual(): Boolean {
		return _.isEqual(this.form.value, this.initialFormValue);
	}

	ngOnInit() {
		this.clientCompanyInformationService.initDefault();
	}

	ngAfterViewInit() {
		this.detectChanges();
		this.saveListener();
		this.patchForm();
	}

	canDeactivate(): boolean {
		if (this.form.dirty) {
			return confirm('You have unsaved changes! Are you sure you want to leave?');
		}
		return true;
	}

	public changeMedia(socialMediaForm: SocialMediaForm) {
		this.matDialog
			.open(ClientProfileSocialMediaModalComponent, {
				data: {
					...socialMediaForm,
					value: this.socialMedia.get(socialMediaForm.formControlName).value
				},
				backdropClass: 'modal__backdrop'
			})
			.afterClosed()
			.pipe(first(), untilDestroyed(this))
			.subscribe(res => {
				if (res) {
					this.socialMedia.get(socialMediaForm.formControlName).patchValue(res);
					this.cdr.detectChanges();
				}
			})
	}

	onSubmit() {
		if (this.form.errors) {
			return;
		}
		const initialFormValueTmp = _.cloneDeep(this.initialFormValue);
		try {
			this.clientCompanyInformationService.onSubmit(this.form.value);
			this.initialFormValue = this.form.value;
			this.authService.updateCompany({...this.company, ...this.form.value});
			this.updateTabasData();
		} catch (e) {
			console.error(e);
			this.initialFormValue = initialFormValueTmp;
		}
		this.cdr.detectChanges();
	}

	handleData($event: UploadResult) {
		if ($event.logo || $event.logo === undefined) {
			this.form.get('logo').patchValue($event.logo);
		}
		if ($event.banner || $event.banner === undefined) {
			this.form.get('banner').patchValue($event.banner);
		}
	}

	private patchForm() {
		const user = this.authService.user;
		const company = this.authService.company;
		const socialMedia = _.omitBy(company?.socialMedia, (v) => _.isUndefined(v) || _.isNull(v) || v === '' || v === ' ');
		setTimeout(() => {
			this.form.patchValue({
				...company,
				socialMedia,
				businessType: company?.businessType || company?.roleId || user?.role?._id
			});
			this.initialFormValue = this.form.value;
			this.clientProfileSettingsTabsService.data$.next({
				first: this.initialFormValue,
				second: this.form.value
			})
		}, 600)
	}

	private detectChanges() {
		this.form
			.valueChanges
			.pipe(debounceTime(100), untilDestroyed(this))
			.subscribe((res) => {
				this.updateTabasData();
				this.cdr.detectChanges();
			});
	}

	private saveListener() {
		this.clientProfileSettingsTabsService
			.initSubmit$
			.pipe(untilDestroyed(this))
			.subscribe(res => {
				if (res === null) {
					this.patchForm();
				} else if ((res as PageTab)?.label === TabLabel?.COMPANY_INFORMATION) {
					this.onSubmit();
				}
			})
	}

	private updateTabasData() {
		this.clientProfileSettingsTabsService.data$.next({
			first: this.form.value,
			second: this.initialFormValue
		});
	}
}
