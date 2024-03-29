import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {
	ClientProfileModalContainerComponent
} from "../client-profile-modal-container/client-profile-modal-container.component";
import {
	ClientProfileModalContainerService
} from "../client-profile-modal-container/client-profile-modal-container.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {TradeShow} from "../../tabs/client-trade-shows/client-trade-shows.interface";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {B2bNgxInputModule} from "@b2b/ngx-input";
import {NgxInputVersionEnum} from "../../../../../../../../../projects/ngx-input/src/lib/enum/ngx-input-version.enum";
import {TitleCasePipe} from "@angular/common";
import {B2bDatepickerModule} from "@b2b/datepicker";
import {B2bNgxFileModule} from "@b2b/ngx-file";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {AuthService} from "../../../../../../../auth/services/auth/auth.service";
import {HotToastService} from "@ngneat/hot-toast";
import {ClientTradeShowsService} from "../../tabs/client-trade-shows/client-trade-shows.service";
import {first} from "rxjs/operators";
import {toastMessages} from "../../tabs/client-company-information/client-company-information.constants";
import {firstValueFrom} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {MatError} from "@angular/material/form-field";
import {onlyLatinAndNumberAndSymbols} from "../../../../../../../core/helpers/validator/only-latin-numbers-symbols";
import {GlobyFile} from "../../../../../../../../../projects/globy-file/src/lib/globy-file.component";
import {fileUploadDescription} from "./client-profile-trade-shows-modal.constants";
import {HandleItem} from "../../../../../../../../../projects/globy-file/src/lib/interfaces/handle.interface";
import {Photo} from "../../../../../../../core/models/photo.model";
import {environment} from "../../../../../../../../environments/environment";

@UntilDestroy()
@Component({
	selector: 'b2b-client-profile-trade-shows-modal',
	standalone: true,
	imports: [
		ClientProfileModalContainerComponent,
		B2bNgxInputModule,
		ReactiveFormsModule,
		TitleCasePipe,
		B2bDatepickerModule,
		B2bNgxFileModule,
		B2bNgxButtonModule,
		MatError,
		GlobyFile
	],
	templateUrl: './client-profile-trade-shows-modal.component.html',
	styleUrl: './client-profile-trade-shows-modal.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileTradeShowsModalComponent extends ClientProfileModalContainerService<ClientProfileTradeShowsModalComponent, any> implements OnInit {

	form = this.fb.group({
		title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40), onlyLatinAndNumberAndSymbols()]],
		description: ['', [Validators.required, Validators.minLength(40), Validators.maxLength(200), onlyLatinAndNumberAndSymbols()]],
		startedAt: [new Date(), Validators.required],
		endedAt: [new Date(), Validators.required],
		images: [],
		type: ['upcoming'],
	})

	today = new Date('December 31, 2009, 23:15:30 GMT-11:00');
	protected readonly NgxInputVersionEnum = NgxInputVersionEnum;
	protected readonly fileUploadDescription = fileUploadDescription;

	constructor(@Inject(MAT_DIALOG_DATA) public tradeShow: Partial<TradeShow>,
							private authService: AuthService,
							private hotToastService: HotToastService,
							private clientTradeShowService: ClientTradeShowsService,
							private fb: FormBuilder) {
		super();
	}

	get company() {
		return this.authService.company;
	}

	get controls() {
		return this.form?.controls;
	}

	get title() {
		return this.controls?.title;
	}

	get description() {
		return this.controls?.description
	}

	ngOnInit() {
		this.patchValue();
	}

	async onSubmit() {
		const tradeShow = (await firstValueFrom(this.clientTradeShowService.tradeShows$))?.find(x => x?._id === this.tradeShow?._id);
		if (!tradeShow) {
			return this.create()
		}
		this.edit();
		this.onDismiss();
	}

	patchValue() {
		if (!this.tradeShow) {
			return
		}
		this.form.patchValue({
			...this.tradeShow,
			startedAt: new Date(this.tradeShow.startedAt),
			endedAt: new Date(this.tradeShow.endedAt)
		});
	}

	edit() {
		const edit = {
			...this.tradeShow,
			...this.form.value,
			uploadedImages: this.form?.value?.images?.map((x: any) => x?._id || undefined).filter((x: string) => !!x),
		} as TradeShow;
		console.log('EDIT::', edit);
		this.clientTradeShowService
			.update(edit)
			.pipe(first(), this.hotToastService.observe(toastMessages), untilDestroyed(this))
			.subscribe(res => {
					console.log('UPDATE::', res);
					this.onDismiss(res)
				}
			)
	}

	create() {
		const create = {
			...this.tradeShow,
			...this.form.value
		} as TradeShow
		this.clientTradeShowService
			.create(create)
			.pipe(untilDestroyed(this), first(), this.hotToastService.observe(toastMessages))
			.subscribe((res) => {
				console.log(res);
				this.onDismiss(res);
			})
	}

	override onDismiss(data?: any) {
		super.onDismiss(data);
		this.clientTradeShowService.getListByCompanyId().subscribe();
	}

	public handleImage(item: Photo): HandleItem {
		const res = {
			url: item?.path ? environment.apiUrl + encodeURIComponent(item?.path) : null,
			type: 'image'
		} as HandleItem;
		console.log(res);
		return res;
	}
}
