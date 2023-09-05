import { Component, OnInit } from '@angular/core';
import { B2bNgxInputModule, B2bNgxInputThemeEnum } from "@b2b/ngx-input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { B2bNgxSelectModule, B2bNgxSelectThemeEnum } from "@b2b/ngx-select";
import { B2bNgxTextareaModule } from "@b2b/ngx-textarea";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { B2bNgxButtonModule, B2bNgxButtonThemeEnum } from "@b2b/ngx-button";
import { CommonModule } from "@angular/common";
import { B2bNgxIconModule } from "@b2b/ngx-icon";
import { MatDialogModule } from "@angular/material/dialog";
import { B2bNgxCountrySelectModule } from "@b2b/ngx-country-select";

@Component({
	selector: 'b2b-create-rfq-dialog',
	templateUrl: './create-rfq-dialog.component.html',
	styleUrls: ['./create-rfq-dialog.component.scss'],
	imports: [
		CommonModule,
		B2bNgxInputModule,
		B2bNgxSelectModule,
		ReactiveFormsModule,
		B2bNgxTextareaModule,
		B2bNgxButtonModule,
		B2bNgxIconModule,
		MatDialogModule,
		B2bNgxCountrySelectModule
	],
	standalone: true
})
export class CreateRfqDialogComponent implements OnInit {
	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public rfqFormGroup: FormGroup = new FormGroup({
		productName: new FormControl(null, Validators.required),
		productSector: new FormControl(null, Validators.required),
		productCategory: new FormControl(null, Validators.required),
		amount: new FormControl(null, Validators.required),
		comments: new FormControl(null, Validators.required),
		deliveryTerms: new FormControl(null, Validators.required),
		location: new FormControl(null, Validators.required),
	});
	public isValid$: Observable<boolean> = this.rfqFormGroup.statusChanges.pipe(map(status => status === 'VALID'))

  constructor() { }

  ngOnInit(): void {
  }

	public submitForm(): void {
		console.log(this.rfqFormGroup.value);
	}
}
