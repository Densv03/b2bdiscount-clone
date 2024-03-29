import {inject, Injectable} from '@angular/core';
import {GetTradeShowList, TradeShow} from "./client-trade-shows.interface";
import {ApiService} from "../../../../../../../core/services/api/api.service";
import _ from "lodash";
import {Observable, of} from "rxjs";
import {first} from "rxjs/operators";
import {AuthService} from "../../../../../../../auth/services/auth/auth.service";

@Injectable({
	providedIn: 'root'
})
export class ClientTradeShowsService {

	tradeShows$ = new Observable<TradeShow[]>;
	tradeShow$ = new Observable<TradeShow>;
	private readonly baseUrl = 'trade-show'
	private apiService = inject(ApiService);
	private authService = inject(AuthService);

	create(data: TradeShow) {
		const create = this.getFormData(data);
		return this.apiService.post<TradeShow>(this.baseUrl, create);
	}

	update(data: TradeShow) {
		const update = this.getFormData(data);
		return this.apiService.patch<TradeShow>(this.baseUrl, update);
	}

	delete(id: string) {
		return this.apiService.delete(this.baseUrl, {
			params: {
				id
			}
		})
	}

	list(data: GetTradeShowList) {
		this.tradeShows$ = this.apiService.get<TradeShow[]>(this.baseUrl, {
			params: data
		});
		return this.tradeShows$;
	}

	findById(id: string) {
		this.tradeShow$ = this.apiService.get<TradeShow>(this.baseUrl + `/${id}`);
		return this.tradeShow$;
	}

	getListByCompanyId(id?: string) {
		id = id ?? this.authService?.company?._id;
		if (!id) {
			return of(null)
		}
		return this.list({company: id}).pipe(first())
	}

	private getFormData(show: TradeShow) {
		show.endedAt = handleDate(show.endedAt);
		show.startedAt = handleDate(show.startedAt);
		const formData = new FormData()
		const images = _.pick(show, 'images')?.images?.filter(x => !x?._id);
		const uploadedImages = _.pick(show, 'uploadedImages')?.uploadedImages as string[];
		// Omit images form main object because we will send them as binaries
		const data = _.omit(show, 'images', 'uploadedImages');
		// Create array for binary files
		if (images?.length) {
			for (const image of images as unknown as File[]) {
				formData.append('images', image)
			}
		}
		if (uploadedImages?.length) {
			for (const image of uploadedImages) {
				formData.append('uploadedImages', image)
			}
		}
		// Append form data with data it needed;
		Object.entries(data).forEach(([key, value]: [string, any]) => {
			formData.append(key, value);
		})
		return formData;
	}
}

function handleDate(data: any) {
	return data ? data.toDateString() : null;
}

