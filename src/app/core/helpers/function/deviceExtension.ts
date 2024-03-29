import {PlatformService} from "../../../client/services/platform/platform.service";
import {Inject} from "@angular/core";
import {DOCUMENT} from "@angular/common";

export class DeviceExtension {
	constructor(private readonly platformService: PlatformService,
							@Inject(DOCUMENT) private readonly document: Document) {}

	public isMobile(): boolean {
		return this.document.defaultView.innerWidth < 576;
	}

}
