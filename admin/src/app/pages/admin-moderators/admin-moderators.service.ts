import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../src/app/core/services/api/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeratorRoleRequestModel } from './models/moderator-role-request.model';
import { first } from 'rxjs/operators';
import { ModeratorRoleModel } from './models/moderator-role.model';
import { ModeratorRequestModel } from './models/moderator-request.model';
import { HttpEvent } from '@angular/common/http';
import { ModeratorRoleResponseModel } from './models/moderator-role-response.model';

@Injectable({
	providedIn: 'root',
})
export class AdminModeratorsService {
	private moderatorsListSource: BehaviorSubject<any[]> = new BehaviorSubject<
		any[]
	>([]);
	private rolesListSource: BehaviorSubject<ModeratorRoleModel[]> =
		new BehaviorSubject<ModeratorRoleModel[]>([]);
	private apiListSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
		[]
	);
	constructor(private apiService: ApiService) {}

	get moderators$(): Observable<any[]> {
		return this.moderatorsListSource.asObservable();
	}
	get roles$(): Observable<ModeratorRoleModel[]> {
		return this.rolesListSource.asObservable();
	}
	get apiList$(): Observable<any[]> {
		return this.apiListSource.asObservable();
	}

	public getApiList(): void {
		this.apiService
			.get('admin/api-types')
			.pipe(first())
			.subscribe((apiList: any) => this.apiListSource.next(apiList));
	}
	public getModeratorRoles(): void {
		this.apiService
			.get<ModeratorRoleModel[]>('admin/moderator-roles')
			.pipe(first())
			.subscribe((roles) => this.rolesListSource.next(roles));
	}

	public getModeratorsList(): void {
		this.apiService
			.get('admin/moderators-list')
			.pipe(first())
			.subscribe((moderators: any) =>
				this.moderatorsListSource.next(moderators)
			);
	}
	public createModeratorRole(
		body: ModeratorRoleRequestModel
	): Observable<HttpEvent<ModeratorRoleResponseModel>> {
		return this.apiService.post<ModeratorRoleResponseModel>(
			'admin/moderator-roles',
			body
		);
	}
	public changeModeratorRole(
		body: ModeratorRoleRequestModel
	): Observable<ModeratorRoleResponseModel> {
		return this.apiService.put<ModeratorRoleResponseModel>(
			'admin/moderator-roles',
			body
		);
	}
	public deleteModeratorRole(
		body: Pick<ModeratorRoleModel, 'name'>
	): Observable<any> {
		return this.apiService.delete('admin/moderator-roles', { body });
	}
	public createModerator(body: ModeratorRequestModel): Observable<any> {
		return this.apiService.post<ModeratorRequestModel>(
			'admin/add-moderator-roles-to-user',
			body
		);
	}

	public deleteModerator(email: string): Observable<any> {
		return this.apiService.delete('admin/moderator-roles/remove', {
			body: { email },
		});
	}
}
