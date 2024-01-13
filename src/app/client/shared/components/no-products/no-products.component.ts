import { Component } from '@angular/core';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { ClaimButtonsClassesEnum } from '../../enums/claim-buttons-classes.enum';

@Component({
	selector: 'b2b-no-products',
	templateUrl: './no-products.component.html',
	styleUrls: ['./no-products.component.scss'],
})
export class NoProductsComponent {
	public buttonThemeEnum = B2bNgxButtonThemeEnum;
	public claimButtonClasses = ClaimButtonsClassesEnum;
}
