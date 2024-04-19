import { Injectable } from '@angular/core';
import { HttpEvent, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiService } from '../../../../../../../src/app/core/services/api/api.service';

export interface Manager {
	firstName: string;
	refId: number;
	lastName: string;
}

@Injectable({
	providedIn: 'root',
})
export class AdminManagerService {
	constructor(private apiService: ApiService) {}

	public addManager(
		firstName: string,
		lastName: string,
		url: string
	): Observable<any> {
		return this.apiService.post('managers/add-new-manager', {
			firstName,
			lastName,
			url,
		});
	}

	public getUsersByRefId(refId: number, offset?: number, limit?: number): Observable<any> {
		let params = new HttpParams();
		if (offset) {
			params = params.append('offset', offset);
		}
		if (limit) {
			params = params.append('limit', limit);
		}
		return this.apiService.get(`statistics/get-users-list?refId=${refId}`, {params});
	}

	public deleteManagerById(refId: string): Observable<any> {
		return this.apiService.delete(`managers/delete-manager?refId=${refId}`);
	}

	public getManagers(refId?: string): Observable<any> {
		if (refId) {
			return this.apiService.get(`managers/get-managers?refId=${refId}`);
		} else {
			return this.apiService.get('managers/get-managers');
		}
	}
}
