import { Component, OnInit } from '@angular/core';
import {
	Category,
	CategoryChildren,
} from '../../../../../client-marketplace/shared/models/category.model';
import {
	MatDialog,
	MatDialogClose,
	MatDialogRef,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { SvgIconComponent } from 'angular-svg-icon';
import { PlatformService } from '../../../../../../services/platform/platform.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { SourcingRequestService } from '../../../../../client-sourcing-request/sourcing-request.service';
import { PublicCompanyInfoModel } from '../../../../../../../core/models/public-company-info.model';
import { getFormData } from '../../../../../../../core/helpers/function/get-form-data';
import { first } from 'rxjs/operators';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../../../../../../../auth/services/auth/auth.service';
import {BehaviorSubject, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
	selector: 'b2b-subcategories-modal',
	standalone: true,
	imports: [
		MatDialogClose,
		MatIcon,
		SvgIconComponent,
		ReactiveFormsModule,
		MatButton,
		AsyncPipe,
	],
	templateUrl: './subcategories-modal.component.html',
	styleUrl: './subcategories-modal.component.scss',
})
export class SubcategoriesModalComponent implements OnInit {
	public parentSector: Category;
	public company: PublicCompanyInfoModel;
	public isBrowser = this.platformService.isBrowser;
	public allValuesAreSelected$: Observable<boolean>
	public sectorFormGroup: FormGroup;
	private allValuesAreSelectedSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	constructor(
		private readonly platformService: PlatformService,
		private readonly fb: FormBuilder,
		private readonly sourcingRequestService: SourcingRequestService,
		private readonly matDialogRef: MatDialogRef<SubcategoriesModalComponent>,
		private readonly authService: AuthService,
		private readonly hotToastService: HotToastService
	) {}

	ngOnInit() {
		this.allValuesAreSelected$ = this.allValuesAreSelectedSource.asObservable();
		this.sectorFormGroup = this.buildCategoryFormGroup(
			this.parentSector.children,
			this.company.categories
		);
		this.changeAllSelectedState();
	}
	private changeAllSelectedState(): void {
		this.sectorFormGroup.valueChanges.subscribe(value => {
			const formValuesArr = Array.from(Object.values(value));
			if (formValuesArr.every(item => !!item)) {
				this.allValuesAreSelectedSource.next(true);
			} else {
				this.allValuesAreSelectedSource.next(false);
			}
		})
	}
	public closeModal(): void {
		this.matDialogRef.close();
	}

	public generateSectorIconPath(path: string): string {
		return `/assets/icons/header/sectors/${path}.svg`;
	}

	public buildCategoryFormGroup(
		categories: CategoryChildren[],
		selectedCategoryIds: string[] = []
	): FormGroup {
		let group = this.fb.group({});
		let selectedItemsCount = 0;
		categories.forEach((category) => {
			let isSelected = selectedCategoryIds.some((id) => id === category._id);
			isSelected ? selectedItemsCount += 1 : null;
			group.addControl(category._id, this.fb.control(isSelected || ''));
		});
		if (selectedItemsCount === categories.length) {
			this.allValuesAreSelectedSource.next(true);
		}
		return group;
	}

	submitForm() {
		this.parentSector.children.forEach((item) => {
			this.company.categories = this.company.categories.filter(
				(el) => el !== item._id
			);
		});
		this.company.categories = Array.from(
			new Set([
				...this.company.categories,
				...this.categoriesFormGroupSelectedIds(),
			])
		);
		delete this.company.advantages;
		const companyInfo = getFormData(this.company);

		this.sourcingRequestService
			.updateCompanyInfo(companyInfo)
			.pipe(
				first(),
				this.hotToastService.observe({
					loading: 'Updating company information...',
					success: 'Company information successfully updated.',
					error: 'Company information updating failed',
				})
			)
			.subscribe((data) => {
				this.authService.updateCompany(data);
				this.matDialogRef.close();
			});
	}

	categoriesFormGroupSelectedIds(): string[] {
		let ids: string[] = [];
		for (const key in this.sectorFormGroup.controls) {
			if (this.sectorFormGroup.controls[key].value) {
				ids.push(key);
			} else {
				ids = ids.filter((id) => id !== key);
			}
		}
		return ids;
	}

	protected readonly close = close;
	private changeFormControlsState(checked: boolean): void {
		Object.keys(this.sectorFormGroup.controls).forEach(controlName => {
			this.sectorFormGroup.get(controlName).setValue(checked);
		});
	}

	changeSelectAllState() {
		if (this.allValuesAreSelectedSource.value) {
			this.allValuesAreSelectedSource.next(false);
			this.changeFormControlsState(false);
		} else {
			this.allValuesAreSelectedSource.next(true);
			this.changeFormControlsState(true);
		}
	}
}
