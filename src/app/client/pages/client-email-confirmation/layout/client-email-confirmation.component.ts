import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { catchError, map, switchMap } from "rxjs/operators";
import { ApiService } from "../../../../core/services/api/api.service";
import { of } from "rxjs";
import { B2bNgxLinkService } from "@b2b/ngx-link";
import {MixpanelService} from "../../../../core/services/mixpanel/mixpanel.service";
import {PlatformService} from "../../../services/platform/platform.service";

@UntilDestroy()
@Component({
	selector: "b2b-client-email-confirmation",
	templateUrl: "./client-email-confirmation.component.html",
	styleUrls: ["./client-email-confirmation.component.scss"],
})
export class ClientEmailConfirmationComponent implements AfterViewInit {
	isAccountActivated: boolean;

	constructor(
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _router: Router,
		private readonly _apiService: ApiService,
		public readonly b2bNgxLinkService: B2bNgxLinkService,
    private readonly mixpanelService: MixpanelService,
		private readonly platformService: PlatformService
	) {}

	ngOnInit() {
	}

	ngAfterViewInit() {
		this._activatedRoute.params
			.pipe(
				untilDestroyed(this),
				switchMap((id: any) => {
					return this._apiService.get(`email/verify/${id.id}`);
				}),
				catchError(() => {
					this.isAccountActivated = true;
					return of(null);
				}
			))
			.subscribe(() => {
				// this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink(`/registration-complete`)
				if (this.platformService.isBrowser) {
					this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink(`/registration-complete`));
				}
			})
			// .subscribe( () => {
			// 	this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink(`/registration-complete`));
			// });

	}
}
