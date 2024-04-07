import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { BlogAuthor, CreateAuthorRequest } from "../types/admin-blog-post.type";
import { FormType } from "../../../../../../src/app/core/helpers/type/form.type";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { B2bNgxFileModule } from "@b2b/ngx-file";
import { MatButton } from "@angular/material/button";
import { B2bDatepickerModule } from "@b2b/datepicker";
import { environment } from "../../../../../../src/environments/environment";

type CreateAuthorFormValues = {
	[P in keyof CreateAuthorRequest]: CreateAuthorRequest[P] | null;
};

@Component({
	selector: 'app-add-author-dialog',
	standalone: true,
	imports: [
		ReactiveFormsModule,
		MatFormField,
		MatInput,
		B2bNgxFileModule,
		MatButton,
		MatDialogClose,
		MatLabel,
		B2bDatepickerModule,
		MatError
	],
	templateUrl: './add-author-dialog.component.html',
	styleUrl: './add-author-dialog.component.scss'
})
export class AddAuthorDialogComponent implements OnInit {
	public formGroup: FormGroup<FormType<CreateAuthorFormValues>> = this.createAuthorForm();
	constructor(private fb: FormBuilder,
							private dialogRef: MatDialogRef<AddAuthorDialogComponent>,
							@Inject(MAT_DIALOG_DATA) public data?: BlogAuthor) {
	}

	public ngOnInit(): void {
		if (this.data) {
			this.patchForm(this.data);
		}
	}

	public createAuthor(): void {
		if (this.formGroup.invalid) {
			return;
		}

		const joiningDate = this.formGroup.get('dateJoinedPlatform')?.value as unknown as Date;
		this.formGroup.value.dateJoinedPlatform = joiningDate.toISOString();

		this.dialogRef.close({action: 'create', data: this.formGroup.value})
	}

	public updateAuthor(): void {
		this.dialogRef.close({action: 'update', data: {...this.formGroup.value, _id: this.data._id}})
	}

	public deleteAuthor(): void {
		this.dialogRef.close({action: 'delete', data: this.data._id})
	}

	private createAuthorForm(): FormGroup<FormType<CreateAuthorFormValues>> {
		return this.fb.group<FormType<CreateAuthorFormValues>>({
			fullName: new FormControl(null),
			resume: new FormControl(null, [Validators.maxLength(500)]),
			photo: new FormControl(null),
			facebook: new FormControl(null),
			instagram: new FormControl(null),
			linkedin: new FormControl(null),
			twitter: new FormControl(null),
			dateJoinedPlatform: new FormControl(null)
		});
	}

	private patchForm(data: BlogAuthor): void {
		const {photo, socialMedia, resume, fullName, dateJoinedPlatform} = data
		this.formGroup.patchValue({
		// @ts-ignore
			photo: [environment.apiUrl + photo?.lg],
			...socialMedia,
			resume,
			fullName,
			dateJoinedPlatform
		})
	}
}
