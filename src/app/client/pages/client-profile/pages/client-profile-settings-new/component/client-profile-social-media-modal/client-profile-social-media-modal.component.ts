import {Component, Inject, OnInit} from '@angular/core';
import {
	ClientProfileModalContainerComponent
} from "../client-profile-modal-container/client-profile-modal-container.component";
import {B2bNgxInputModule} from "@b2b/ngx-input";
import {NgClass} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {SocialMediaForm} from "../../tabs/client-company-information/social-medias.const";
import {
	ClientProfileModalContainerService
} from "../client-profile-modal-container/client-profile-modal-container.service";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgxInputVersionEnum} from "../../../../../../../../../projects/ngx-input/src/lib/enum/ngx-input-version.enum";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {socialLink} from "../../../../../../../core/helpers/validator/social-link";

@Component({
	selector: 'b2b-client-profile-social-media-modal',
	standalone: true,
	imports: [
		ClientProfileModalContainerComponent,
		B2bNgxInputModule,
		NgClass,
		MatIcon,
		ReactiveFormsModule,
		B2bNgxButtonModule
	],
	templateUrl: './client-profile-social-media-modal.component.html',
	styleUrl: './client-profile-social-media-modal.component.scss'
})
export class ClientProfileSocialMediaModalComponent extends ClientProfileModalContainerService<ClientProfileSocialMediaModalComponent, string> implements OnInit {

	control = new FormControl('', [Validators.required, socialLink()]);
	protected readonly NgxInputVersionEnum = NgxInputVersionEnum;

	constructor(@Inject(MAT_DIALOG_DATA) public socialMediaForm: SocialMediaForm) {
		super();
	}

	ngOnInit() {
		this.patchValue();
	}

	patchValue() {
		if (this.socialMediaForm.value) {
			this.control.patchValue(this.socialMediaForm.value)
		}
	}
}
