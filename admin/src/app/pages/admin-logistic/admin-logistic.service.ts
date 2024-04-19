import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../src/app/core/services/api/api.service';

import { AdminLogisticQuery } from '../../../../../src/app/client/state/admin-logistic/admin-logistic.query';
import { AdminLogisticStore } from '../../../../../src/app/client/state/admin-logistic/admin-logistic.store';
import { Observable } from 'rxjs';
import { HttpEvent, HttpParams } from '@angular/common/http';
import { mod } from 'ngx-bootstrap/chronos/utils';
import { SeaRequestInterface } from './interface/sea-request.interface';
import { AirRequestInterface } from './interface/air-request-interface';
import { TariffsResponse } from '../../../../../src/app/client/pages/client-logistic/models/tariffs/tariffs-response.model';
import { TariffUploadResponseInterface } from './interface/tariff-upload-response.interface';
import { CreateDirectionInterface } from './interface/create-direction.interface';

@Injectable({
	providedIn: 'root',
})
export class AdminLogisticService {
	private readonly endpoint: string;

	constructor(
		private readonly apiService: ApiService,
		private readonly adminLogisticQuery: AdminLogisticQuery,
		private readonly adminLogisticStore: AdminLogisticStore
	) {
		this.endpoint = 'freightCalculation/';
	}

	public getCompanies(
		limit: number,
		offset: number,
		data?: { [key: string]: any }
	): Observable<any> {
		let params = new HttpParams();
		params = params.append('limit', limit).append('offset', offset);

		for (const key in data) {
			if (data[key] !== null && data[key] !== undefined && data[key] !== '') {
				params = params.append(key, data[key]);
			}
		}

		const companies = this.adminLogisticQuery.getValue().companies;

		return this.apiService.get(`${this.endpoint}companies`, { params });
	}

	public createCompanyProfile(model: any): Observable<any> {
		return this.apiService.post(`${this.endpoint}companies/create`, model);
	}

	public updateCompanyProfile(model: any, companyId: string): Observable<void> {
		return this.apiService.patch(
			`${this.endpoint}companies/${companyId}/update`,
			model
		);
	}

	public deleteCompanyProfile(companyId: string): Observable<ArrayBuffer> {
		return this.apiService.delete(
			`${this.endpoint}companies/${companyId}/delete`
		);
	}

	public getSeaTariffs(data: SeaRequestInterface): Observable<any> {
		let params = new HttpParams().append('type', 'sea');
		for (let key of Object.keys(data)) {
			if (!!data[key as keyof typeof data]) {
				params = params.append(key, data[key as keyof typeof data]);
			}
		}

		return this.apiService.get(`${this.endpoint}tariffsByCompany`, { params });
	}

	public getAirTariffs(data: AirRequestInterface): Observable<any> {
		let params = new HttpParams().append('type', 'air');
		for (let key of Object.keys(data)) {
			if (!!data[key as keyof typeof data]) {
				params = params.append(key, data[key as keyof typeof data]);
			}
		}

		return this.apiService.get(`${this.endpoint}tariffsByCompany`, { params });
	}

	public uploadSeaTariff(
		companyId: string,
		excelData: FormData
	): Observable<any> {
		return this.apiService.post(
			`${this.endpoint}tariffs/${companyId}/updateSeaTariffs`,
			excelData
		);
	}

	public uploadAirTariff(
		companyId: string,
		excelData: FormData
	): Observable<any> {
		return this.apiService.post(
			`${this.endpoint}tariffs/${companyId}/updateAviaTariffs`,
			excelData
		);
	}

	public createDirection(model: CreateDirectionInterface): Observable<any> {
		return this.apiService.post(`${this.endpoint}directions/create`, model);
	}

	public editDirection(directionId: string, model: CreateDirectionInterface): Observable<any> {
		return this.apiService.put(`${this.endpoint}directions/${directionId}`, model);
	}

	public deleteTariff(id: string, type: string): Observable<ArrayBuffer> {
		return this.apiService.delete(
			`${this.endpoint}tariffs/${id}/delete?type=${type}`
		);
	}

	public getDirection(countryId?: string): Observable<any> {
		let params = new HttpParams().append('nocache', true);
		if (countryId) {
			params = params.append('countryId', countryId);
		}
		return this.apiService.get(`${this.endpoint}directions`, { params });
	}
}
