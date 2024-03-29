import {EventEmitter, inject, Injectable, Output} from '@angular/core';
import {SourcingRequestService} from '../../../../../client-sourcing-request/sourcing-request.service';
import {first} from "rxjs/operators";
import {toastMessages} from "../client-company-information/client-company-information.constants";
import {HotToastService} from "@ngneat/hot-toast";
import {AuthService} from "../../../../../../../auth/services/auth/auth.service";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabOutputData} from "../../component/client-profile-settings-tabs/client-profile-settings-tabs.interface";
import {CompanyAdvantage} from "../../../../../../../core/models/public-company-info.model";
import {onlyLatinAndNumberAndSymbols} from "../../../../../../../core/helpers/validator/only-latin-numbers-symbols";
import _ from "lodash";
import {
	ClientProfileSettingsTabsService
} from "../../component/client-profile-settings-tabs/client-profile-settings-tabs.service";

@Injectable({
	providedIn: 'root',
})
export class ClientAdvantagesService {

	@Output() data: EventEmitter<TabOutputData<CompanyAdvantage[]>> = new EventEmitter<TabOutputData<CompanyAdvantage[]>>();

	sourcingRequestService = inject(SourcingRequestService);
	hotToastService = inject(HotToastService);
	authService = inject(AuthService);
	clientProfileSettingsTabsService = inject(ClientProfileSettingsTabsService);

	fb = inject(FormBuilder);

	array = this.fb.array([]);
	form = this.fb.group(
		{
			advantages: this.array
		}
	)

	get company() {
		return this.authService.company;
	}

	get advantages() {
		return this.form.controls.advantages as FormArray;
	}

	get controls() {
		return this.advantages.controls as unknown as FormGroup[];
	}

	onSubmit() {
		this.sourcingRequestService.updateCompanyInfo({
			companyName: this.authService.company.companyName,
			advantages: _.values(this.form.controls['advantages'].value)
		}).pipe(
			first(),
			this.hotToastService.observe(toastMessages)
		).subscribe((company) => {
			this.authService.updateCompany(company)
			this.updateTabsData();
		})
	}

	getForm(advantage?: CompanyAdvantage): FormGroup {
		return this.fb.group(
			{
				title: [advantage?.title || '', [onlyLatinAndNumberAndSymbols(), Validators.required, Validators.minLength(10), Validators.maxLength(300)]],
				content: [advantage?.content || '', [onlyLatinAndNumberAndSymbols(), Validators.required, Validators.minLength(40), Validators.maxLength(1000)]],
				_id: []
			}
		);
	}

	addForm(value?: CompanyAdvantage) {
		if (this.advantages.length === 3) {
			return;
		}
		this.advantages.push(this.getForm(value))
	}

	updateTabsData(res = this.form?.value as Partial<{ advantages: Partial<CompanyAdvantage>[] }>) {
		this.clientProfileSettingsTabsService.data$.next({
			first: res?.advantages?.map((x) => _.omit(x, ['_id'])),
			second: this.company?.advantages?.map(x => _.omit(x, ['_id'])),
		})
	}
}
