import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {B2bNgxInputModule} from '@b2b/ngx-input';
import {NgxInputVersionEnum} from '../../../../../../../../../projects/ngx-input/src/lib/enum/ngx-input-version.enum';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClientAdvantagesService} from './client-advantages.service';
import {B2bNgxButtonModule} from '@b2b/ngx-button';
import {
	ClientProfileMobileToolbarComponent
} from "../../component/client-profile-mobile-toolbar/client-profile-mobile-toolbar.component";
import {Observable} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import _ from "lodash";
import {CompanyAdvantage} from "../../../../../../../core/models/public-company-info.model";
import {MatError} from "@angular/material/form-field";
import {JsonPipe} from "@angular/common";
import {TabLabel} from "../../client-profile-settings.type";
import {debounceTime} from "rxjs/operators";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";


@UntilDestroy()
@Component({
	selector: 'b2b-client-advantages',
	standalone: true,
	imports: [
		B2bNgxInputModule,
		ReactiveFormsModule,
		FormsModule,
		B2bNgxButtonModule,
		ClientProfileMobileToolbarComponent,
		MatError,
		JsonPipe,
		MatButton,
		MatIcon,
		MatIconButton
	],
	templateUrl: './client-advantages.component.html',
	styleUrl: './client-advantages.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientAdvantagesComponent extends ClientAdvantagesService implements OnInit {
	@Input() initSave$: Observable<Boolean> = new Observable<Boolean>();
	protected readonly NgxInputVersionEnum = NgxInputVersionEnum;

	constructor(private cdr: ChangeDetectorRef) {
		super();
	}

	get isEqual() {
		return _.isEqual(_.values(this.form.value), this.company?.advantages);
	}

	ngOnInit() {
		this.changeDetector();
		this.initDefault();
		this.saveListener();
	}

	initDefault() {
		let advantages: CompanyAdvantage[] = _.cloneDeep(this.authService?.company?.advantages) ?? undefined;
		if (advantages?.length) {
			advantages.forEach(value => this.addForm(value))
		} else {
			this.addForm();
		}
	}

	setDefault() {
		let advantages: CompanyAdvantage[] = _.cloneDeep(this.authService?.company?.advantages) ?? undefined;
		this.form.controls.advantages.controls.forEach((val, index) => {
			if (!advantages[index]) {
				return;
			}
			val.patchValue({
				title: advantages[index].title,
				content: advantages[index].content,
				_id: advantages[index]._id,
			})
		})
	}

	changeDetector() {
		this.form
			.valueChanges
			.pipe(debounceTime(200), untilDestroyed(this))
			.subscribe((res: Partial<{ advantages: Partial<CompanyAdvantage>[] }>) => {
				this.updateTabsData(res);
			});
	}


	getFormGroup(item: any) {
		return item as FormGroup;
	}

	deleteForm($index: number) {
		if (this.advantages.length === 1) {
			return;
		}
		this.advantages.removeAt($index);
	}

	private saveListener() {
		this.clientProfileSettingsTabsService.initSubmit$
			.pipe(untilDestroyed(this))
			.subscribe(res => {
				if (res === null) {
					this.setDefault();
					this.cdr.detectChanges();
				}
				if (res?.label === TabLabel?.OUR_ADVANTAGES) {
					this.onSubmit();
				}
				this.cdr.detectChanges();
			})
	}
}
