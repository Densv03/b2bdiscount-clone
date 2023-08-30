import {ChangeDetectionStrategy, Component, Inject, OnInit, Optional, PLATFORM_ID} from "@angular/core";
import {B2bNgxLinkService, B2bNgxLinkThemeEnum} from "@b2b/ngx-link";
import {isPlatformServer} from "@angular/common";
import {REQUEST} from "@nguniversal/express-engine/tokens";
import {Request} from "express";

@Component({
	selector: "b2b-client-not-found",
	templateUrl: "./client-not-found.component.html",
	styleUrls: ["./client-not-found.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientNotFoundComponent implements OnInit {
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;

	constructor(
		@Inject(PLATFORM_ID) private platformId: any,
		@Optional() @Inject(REQUEST) private request: Request,
		public readonly b2bNgxLinkService: B2bNgxLinkService
	) { }

	ngOnInit() {
		if (isPlatformServer(this.platformId)) {
			if (this.request.res) {
				this.request.res.status(404);
			}
		}
	}
}
