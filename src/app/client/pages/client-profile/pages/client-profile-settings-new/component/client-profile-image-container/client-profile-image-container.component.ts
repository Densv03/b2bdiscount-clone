import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import {environment} from "../../../../../../../../environments/environment";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {B2bNgxIconModule} from "@b2b/ngx-icon";
import {B2bNgxLogoModule} from "@b2b/ngx-logo";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {MatIcon} from "@angular/material/icon";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog} from "@angular/material/dialog";
import {
	ClientProfileImageUploadModalComponent
} from "../client-profile-image-upload-modal/client-profile-image-upload-modal.component";
import {MatButton} from "@angular/material/button";
import {MAT_MENU_DEFAULT_OPTIONS} from "@angular/material/menu";
import {ClientProfileSettingsTabsService} from "../client-profile-settings-tabs/client-profile-settings-tabs.service";

@UntilDestroy()
@Component({
	selector: 'b2b-client-profile-image-container',
	standalone: true,
	imports: [
		B2bNgxButtonModule,
		B2bNgxIconModule,
		B2bNgxLogoModule,
		ReactiveFormsModule,
		NgClass,
		MatIcon,
		MatButton
	],
	templateUrl: './client-profile-image-container.component.html',
	styleUrl: './client-profile-image-container.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientProfileImageContainerComponent implements OnInit {
	@Input() mode: 'mobile' | 'desktop' = 'desktop';
	@Input() modalMode: 'logo' | 'banner' = 'banner';
	@Input() aspectRatio = 'square';
	@Input() path: string;
	@Input() buttonLabel: string;
	@Input() label: string;
	@Input() orientation: 'vertical' | 'horizontal'
	@Input() hideButtons: boolean = false;
	@Input() showEditButton = true;
	@Input() showUploadButton = true;
	@Output() file = new EventEmitter<File>();
	public url: string;
	public image: string;
	public control = new FormControl();

	constructor(private cdr: ChangeDetectorRef,
							private matDialog: MatDialog) {
	}

	get transformedUrl() {
		if (!this.path) {
			this.hideButtons = true;
			return undefined;
		}
		return 'url(' + (environment.apiUrl.includes('staging') ? 'https://api.globy.com/' : environment.apiUrl) + encodeURIComponent(this.path) + ')'
	}

	ngOnInit() {
		this.url = this.transformedUrl;
		this.control.valueChanges.pipe(untilDestroyed(this)).subscribe(res => {
			this.file.emit(res);
		})
	}

	edit() {
		this.openModal();
	}

	delete() {
		this.url = undefined;
		this.hideButtons = true;
		this.file.emit(undefined);
	}

	changeUrl($event: string) {
		if (!$event.includes('data:image')) {
			return;
		}
		this.url = 'url(' + $event + ')';
		this.hideButtons = false;
		this.cdr.detectChanges();
	}

	openModal() {
		this.matDialog.open(ClientProfileImageUploadModalComponent, {
			data: {
				path: this.path,
				mode: this.modalMode,
				device: this.mode,
				image: this.image
			},
		}).afterClosed()
			.pipe(untilDestroyed(this))
			.subscribe(res => {
				if (!res || !res?.file) {
					return;
				}
				this.image = res?.image;
				this.hideButtons = false;
				this.url = 'url(' + this.image + ')';
				this.control.patchValue(res?.file);
				this.cdr.detectChanges();
			})
	}
}
