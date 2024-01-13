import { Component } from '@angular/core';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { FormControl } from '@angular/forms';
import { PlatformService } from '../../../services/platform/platform.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Category } from '../../../pages/client-marketplace/shared/models/category.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'b2b-parent-categories-mobile-list',
	templateUrl: './parent-categories-mobile-list.component.html',
	styleUrls: ['./parent-categories-mobile-list.component.scss'],
})
export class ParentCategoriesMobileListComponent {
	public categories$: Observable<Category[]>;
	public search = new FormControl('');
	public readonly b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;

	constructor(
		public readonly platformService: PlatformService,
		private readonly router: Router,
		private readonly dialogRef: MatDialogRef<ParentCategoriesMobileListComponent>
	) {}

	public setSearch(): void {
		this.router.navigate(['/b2bmarket/listing'], {
			queryParams: { q: this.search.value },
		});
		this.dialogRef.close();
	}
}
