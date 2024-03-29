import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output,} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {PublicCompanyInfoModel} from '../../../../../../../core/models/public-company-info.model';
import {JsonPipe, NgClass, NgStyle} from '@angular/common';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {B2bNgxButtonModule} from '@b2b/ngx-button';
import {B2bNgxIconModule} from '@b2b/ngx-icon';
import {B2bNgxLogoModule} from '@b2b/ngx-logo';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {UploadResult} from './client-profile-settings-image-uploader.interface';
import {AuthService} from '../../../../../../../auth/services/auth/auth.service';
import {
	ClientProfileImageContainerComponent
} from "../client-profile-image-container/client-profile-image-container.component";

@UntilDestroy()
@Component({
	selector: 'b2b-client-profile-settings-image-uploader',
	standalone: true,
	imports: [
		MatIcon,
		MatButton,
		NgStyle,
		B2bNgxButtonModule,
		B2bNgxIconModule,
		JsonPipe,
		B2bNgxLogoModule,
		ReactiveFormsModule,
		NgClass,
		ClientProfileImageContainerComponent,
	],
	templateUrl: './client-profile-settings-image-uploader.component.html',
	styleUrl: './client-profile-settings-image-uploader.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientProfileSettingsImageUploaderComponent {
	@Input() company: PublicCompanyInfoModel;
	@Output() data = new EventEmitter<UploadResult>();

	logo: string;
	banner: string;
	form = this.fb.group({
		logo: [],
		banner: [],
	});

	constructor(
		private fb: FormBuilder,
		private authService: AuthService
	) {
		this.company = this.authService.company;
		this.initFormListener();
	}

	initFormListener() {
		this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((res) => {
			if (!res.logo) {
				this.logo = undefined;
			}
			if (!res.banner) {
				this.banner = undefined;
			}
			this.data.emit(res as UploadResult);
		});
	}

	patchLogo($event: File | undefined) {
		this.form.get('logo').patchValue($event);
		if (this.company?.logo) {
			this.company.logo = undefined;
		}
	}

	patchBanner($event: File) {
		this.form.get('banner').patchValue($event);
		if (this.company?.banner) {
			this.company.banner = undefined;
		}
	}
}
