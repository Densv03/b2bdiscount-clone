import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../../client-marketplace/shared/models/category.model';
import { PlatformService } from '../../../../../../services/platform/platform.service';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { SubcategoriesModalComponent } from '../subcategories-modal/subcategories-modal.component';
import { PublicCompanyInfoModel } from '../../../../../../../core/models/public-company-info.model';

@Component({
	selector: 'b2b-sectors-modal',
	standalone: true,
	imports: [MatIcon, NgIf, SvgIconComponent, MatDialogClose],
	templateUrl: './sectors-modal.component.html',
	styleUrl: './sectors-modal.component.scss',
})
export class SectorsModalComponent {
	public sectors: Category[];
	public company: PublicCompanyInfoModel;
	public isBrowser = this.platformService.isBrowser;
	constructor(
		private readonly platformService: PlatformService,
		private readonly dialog: MatDialog
	) {}

	public openSubCategoriesDialog(parentSector: Category): void {
		const dialog = this.dialog.open(SubcategoriesModalComponent, {
			panelClass: 'categories-list-mobile',
		});
		dialog.componentInstance.parentSector = parentSector;
		dialog.componentInstance.company = this.company;
	}

	public generateSectorIconPath(path: string): string {
		return `/assets/icons/header/sectors/${path}.svg`;
	}
}
