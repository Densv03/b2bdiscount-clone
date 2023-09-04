import { Component, Inject } from '@angular/core';
import { DialogRef } from "@angular/cdk/dialog";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { B2bNgxIconModule } from "@b2b/ngx-icon";
import { CommonModule, UpperCasePipe } from "@angular/common";
import { getName } from "country-list";
import { B2bNgxSelectModule, B2bNgxSelectThemeEnum } from "@b2b/ngx-select";
import { BehaviorSubject, Observable, of, map } from "rxjs";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { B2bNgxTextareaModule } from "@b2b/ngx-textarea";
import { B2bNgxInputModule, B2bNgxInputThemeEnum } from "@b2b/ngx-input";
import { B2bNgxCheckboxModule } from "@b2b/ngx-checkbox";
import { B2bNgxButtonModule, B2bNgxButtonThemeEnum } from "@b2b/ngx-button";

@Component({
	selector: 'b2b-contact-supplier-form-dialog',
	templateUrl: './contact-supplier-form-dialog.component.html',
	styleUrls: ['./contact-supplier-form-dialog.component.scss'],
	imports: [
		CommonModule,
		B2bNgxIconModule,
		UpperCasePipe,
		B2bNgxSelectModule,
		ReactiveFormsModule,
		B2bNgxTextareaModule,
		B2bNgxCheckboxModule,
		B2bNgxButtonModule,
		MatDialogModule,
		B2bNgxInputModule
	],
	standalone: true
})
export class ContactSupplierFormDialogComponent {
	public b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public productNames$: Observable<any[]> = this.getProductNames();
	public supplierForm: FormGroup = new FormGroup({
		baseForm: this.getBaseForm(),
	});

	public isFormValid$: Observable<boolean> = this.supplierForm.statusChanges.pipe(map(status => status === 'VALID'))

	private isFormExpandedSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public isFormExpanded$: Observable<boolean> = this.isFormExpandedSource.asObservable();

	constructor(private dialogRef: DialogRef<ContactSupplierFormDialogComponent>,
							@Inject(MAT_DIALOG_DATA) public data: any) {
	}

	public getIsFormExpanded(): boolean {
		return this.isFormExpandedSource.getValue();
	}

	public getCountryName(countryCode: string): string {
		return getName(countryCode) || '';
	}

	public toggleExpandForm(): void {
		this.isFormExpandedSource.next(!this.isFormExpandedSource.getValue());
		if (this.getIsFormExpanded()) {
			this.dialogRef.updateSize(undefined, '711px')
			this.supplierForm.addControl('expandedForm', this.getExpandedForm());
		} else {
			this.dialogRef.updateSize(undefined, '515px')
			this.supplierForm.removeControl('expandedForm')
		}
	}

	private getProductNames(): Observable<any[]> {
		return of([
			{
				label: 'Product 1',
				value: 's67sd8f76sdf76s8adfghfg78h'
			},
			{
				label: 'Product 2',
				value: '7fg6bfgng6j7f6gs8dfsd'
			},
			{
				label: 'Product 3',
				value: 'f9gjg77d5f567h7gj8dfdsf7d',
			},
		]);
	}

	private getBaseForm(): FormGroup {
		return new FormGroup({
			productName: new FormControl(null, Validators.required),
			requirements: new FormControl(null, Validators.required),
		})
	}
	private getExpandedForm(): FormGroup {
		return new FormGroup({
			budgetRange: new FormControl(null, Validators.required),
			deliveryLocation: new FormControl(null, Validators.required),
			termsOfDelivery: new FormControl(null, Validators.required),
			requiredAmount: new FormControl(null, Validators.required)
		})
	}
}
