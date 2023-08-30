import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from "@angular/core";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import { B2bNgxButtonThemeEnum } from "@b2b/ngx-button";
import { B2bNgxInputThemeEnum } from "@b2b/ngx-input";
import { HotToastService } from "@ngneat/hot-toast";
// import { FormBuilder, FormControl } from "@ngneat/reactive-forms";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
// import { NgxSmartModalService } from "ngx-smart-modal";
import { ApiService } from "../../../../../core/services/api/api.service";
import {TranslateService} from "@ngx-translate/core";

const SUBJECT_OPTIONS = [
	{ label: "Support", value: "support" },
	{ label: "Legal Help", value: "legal-help" },
];

@UntilDestroy()
@Component({
	selector: "b2b-auth-reset-password-modal",
	templateUrl: "./auth-reset-password-modal.component.html",
	styleUrls: ["./auth-reset-password-modal.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthResetPasswordModalComponent {
	public readonly b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public readonly b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public readonly formControl: FormControl = new FormControl("", [Validators.email, Validators.required]);

	public messageSent = false;

	constructor(
		// private readonly _ngxSmartModalService: NgxSmartModalService,
		private readonly _formBuilder: FormBuilder,
		private readonly _apiService: ApiService,
		private readonly _hotToastrService: HotToastService,
		private readonly _changeDetectorRef: ChangeDetectorRef,
		private readonly translateService: TranslateService
	) {}

	public sendMessage(formControl: FormControl) {
		this.formControl.markAsTouched();

		if (formControl.invalid) {
			return;
		}

		const data = {
			email: formControl.value,
		};

		this._apiService
			.post("auth/forgotPassword", data)
			.pipe(
				untilDestroyed(this),
				this._hotToastrService.observe({
					loading: this.translateService.instant("TOASTR.LOADING"),
					success: this.translateService.instant("TOASTR.SUCCESS"),
					error: this.translateService.instant("AUTH.INVALID_EMAIL_ADDRESS"),
				})
			)
			.subscribe(
				() => {
					this.messageSent = true;
					this._changeDetectorRef.detectChanges();
				},
				(err) => {
					this.formControl.setErrors({ [err.error.code]: true });

					this._changeDetectorRef.detectChanges();
				}
			);
	}

	public closeModal() {
		// const modal = this._ngxSmartModalService.getModal("createContactModal");

		// modal.close();
	}
}
