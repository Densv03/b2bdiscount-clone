import { Injectable } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { TransportTypesStore } from "../../state/transport-types/transport-types.store";
import { TransportTypesQuery } from "../../state/transport-types/transport-types.query";
import { ApiService } from "../../../core/services/api/api.service";
import {TranslateService} from "@ngx-translate/core";

@UntilDestroy()
@Injectable({
	providedIn: "root",
})
export class TransportTypesService {
	public readonly endpoint: string;

	constructor(
		private readonly _apiService: ApiService,
		private readonly _transportTypesStore: TransportTypesStore,
		private readonly _transportTypesQuery: TransportTypesQuery,
		private readonly translateService: TranslateService
	) {
		this.endpoint = "transportTypes";
	}

	public getTransportTypes() {
		const { transportTypes } = this._transportTypesQuery.getValue();

		if (!transportTypes.length) {
			this._apiService
				.get(this.endpoint)
				.pipe(untilDestroyed(this))
				.subscribe((response: any) => {
					this._transportTypesStore.update({
						transportTypes: response.map((transport: any) => ({
							...transport,
							displayName: `TRANSPORT_TYPE.${transport.name.toUpperCase()}`,
						})),
					});
				});
		}

		return this._transportTypesQuery.selectTransportTypes$;
	}
}
