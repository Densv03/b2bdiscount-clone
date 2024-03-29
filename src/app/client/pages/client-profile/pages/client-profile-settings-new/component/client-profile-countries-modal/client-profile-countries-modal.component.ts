import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {
	ClientProfileModalContainerComponent
} from "../client-profile-modal-container/client-profile-modal-container.component";
import {B2bNgxInputModule} from "@b2b/ngx-input";
import {NgxInputVersionEnum} from "../../../../../../../../../projects/ngx-input/src/lib/enum/ngx-input-version.enum";
import {B2bNgxChipsModule} from "@b2b/ngx-chips";
import {B2bNgxCountrySelectModule} from "@b2b/ngx-country-select";
import {
	NgxSelectVariantEnum
} from "../../../../../../../../../projects/ngx-select/src/lib/enums/ngx-select-variant.enum";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {getName} from "country-list";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClientProfileCountriesModalData} from "./client-profile-countries-modal.interface";
import {B2bNgxSelectThemeEnum} from "@b2b/ngx-select";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {
	ClientProfileModalContainerService
} from "../client-profile-modal-container/client-profile-modal-container.service";

@Component({
	selector: 'b2b-client-profile-countries-modal',
	standalone: true,
	imports: [
		ClientProfileModalContainerComponent,
		B2bNgxInputModule,
		B2bNgxChipsModule,
		B2bNgxCountrySelectModule,
		ReactiveFormsModule,
		MatIcon,
		B2bNgxButtonModule
	],
	templateUrl: './client-profile-countries-modal.component.html',
	styleUrl: './client-profile-countries-modal.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileCountriesModalComponent extends ClientProfileModalContainerService<ClientProfileCountriesModalComponent, string[]> implements OnInit {

	control = new FormControl([] as string[]);
	protected readonly NgxInputVersionEnum = NgxInputVersionEnum;
	protected readonly NgxSelectVariantEnum = NgxSelectVariantEnum;
	protected readonly B2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;

	constructor(@Inject(MAT_DIALOG_DATA) private data: ClientProfileCountriesModalData,
							private matDialogRef: MatDialogRef<ClientProfileCountriesModalComponent>) {
		super()
	}

	get countries() {
		return this.control.value;
	}

	ngOnInit() {
		this.patchValue()
		this.resize();
	}

	getCountryName(code: string) {
		return getName(code)
	}

	patchValue() {
		if (!this.data.countries) {
			return;
		}
		this.control.patchValue(this.data.countries);
	}

	deleteCountry(code: string) {
		const filtered = this.countries.filter(x => x !== code);
		this.control.patchValue(filtered);
	}
}
