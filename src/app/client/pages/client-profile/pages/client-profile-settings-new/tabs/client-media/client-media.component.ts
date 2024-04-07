import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, JsonPipe, NgTemplateOutlet, TitleCasePipe} from "@angular/common";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {
	ClientProfileTradeShowCardComponent
} from "../../component/client-profile-trade-show-card/client-profile-trade-show-card.component";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {mediaSections} from "./client-media.constants";
import {MatDialog} from "@angular/material/dialog";
import {MediaSectionType} from "./client-media.interface";
import {AuthService} from "../../../../../../../auth/services/auth/auth.service";
import {FolderService} from "../../../../../../services/folder/folder.service";
import {
	ClientProfileMediaModalComponent
} from "../../component/client-profile-media-modal/client-profile-media-modal.component";
import {Folder} from "../../../../../../../core/models/folder.model";
import {
	GlobyList
} from "../../../../../../../../../projects/globy-file-list/src/lib/components/list/globy-list.component";
import {
	ClientProfileDefaultModalComponent
} from "../../component/client-profile-default-modal/client-profile-default-modal.component";
import {Photo} from "../../../../../../../core/models/photo.model";
import {HandleItem} from "../../../../../../../../../projects/globy-file/src/lib/interfaces/handle.interface";
import {environment} from "../../../../../../../../environments/environment";
import {HotToastService} from "@ngneat/hot-toast";
import {toastMessages} from "../client-company-information/client-company-information.constants";
import {
	GlobyFileCard
} from "../../../../../../../../../projects/globy-file-list/src/lib/components/card/globy-file-card.component";
import {Video} from "../../../../../../../core/models/video.model";

@Component({
	selector: 'b2b-client-media',
	standalone: true,
	imports: [
		AsyncPipe,
		B2bNgxButtonModule,
		ClientProfileTradeShowCardComponent,
		MatIcon,
		MatProgressSpinner,
		TitleCasePipe,
		GlobyList,
		GlobyFileCard,
		NgTemplateOutlet,
		JsonPipe
	],
	templateUrl: './client-media.component.html',
	styleUrl: './client-media.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientMediaComponent implements OnInit {

	matDialog = inject(MatDialog);
	cdr = inject(ChangeDetectorRef);
	authService = inject(AuthService);
	folderService = inject(FolderService);
	hotToastService = inject(HotToastService);
	showFolders: boolean = false;
	protected readonly mediaSections = mediaSections;

	get company() {
		return this.authService.company
	}

	handleImage(item: Photo): HandleItem {
		return {
			type: 'image',
			url: environment.apiUrl + encodeURIComponent(item.path)
		} as HandleItem;
	};

	handleVideo(item: Video): HandleItem {
		const obj = {
			type: item?.link ? 'image' : 'video',
			url: item.link ? item.link : environment?.apiUrl + encodeURIComponent(item?.path)
		} as HandleItem;
		return obj;
	};

	ngOnInit() {
		this.getFolders();
	}

	openModal(type: MediaSectionType, folder?: Folder) {
		this.matDialog.open(ClientProfileMediaModalComponent, {
			data: {
				type,
				folder
			}
		})
			.afterClosed()
			.subscribe(res => {
				this.getFolders();
			})
	}

	getFolders() {
		this.folderService.getListByCompanyId().subscribe(res => {
			this.showFolders = res.some(x => x.images?.length > 0 || x?.videos?.length > 0)
			this.cdr.detectChanges();
		});
	}


	deleteItem(item: Folder) {
		this.matDialog.open(ClientProfileDefaultModalComponent, {
			data: {},
			backdropClass: 'modal__backdrop'
		}).afterClosed().subscribe(res => {
			if (res) {
				this.folderService.delete(item._id).pipe(this.hotToastService.observe(toastMessages)).subscribe(res => {
					this.getFolders();
				});
			}
		})
	}
}
