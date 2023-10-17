import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserService } from '../../../pages/client-profile/services/user/user.service';
import { CreateRfqDialogComponent } from '../../../pages/client-tradebid/components/create-rfq-dialog/create-rfq-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ClaimButtonsClassesEnum } from '../../enums/claim-buttons-classes.enum';

@UntilDestroy()
@Component({
	selector: 'b2b-client-subheader',
	templateUrl: './client-subheader.component.html',
	styleUrls: ['./client-subheader.component.scss'],
})
export class ClientSubheaderComponent implements OnInit {
	@Input() searchControl: string;
	@Output() searchValue = new EventEmitter<string>();
	@Output() searchOnClick: EventEmitter<string> = new EventEmitter<string>();

	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public readonly b2bNgxInputThemeEnum: typeof B2bNgxInputThemeEnum;

	public search: FormControl;
	public b2bNgxButtonTheme = B2bNgxButtonThemeEnum;
	public claimButtonClasses = ClaimButtonsClassesEnum;

	constructor() {
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	}

	ngOnInit(): void {
		this.search = new FormControl(this.searchControl || '');
		this.setSearchValue();
	}

	private setSearchValue(): void {
		this.search.valueChanges
			.pipe(untilDestroyed(this), debounceTime(300))
			.subscribe((value) => this.searchValue.emit(value));
	}
}
