import { Component, OnInit } from '@angular/core';
import { AdminModeratorsService } from './admin-moderators.service';
import { catchError, Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { MatDialog } from '@angular/material/dialog';
import { AdminAddModeratorRoleComponent } from './components/admin-add-moderator-role/admin-add-moderator-role.component';
import { ModeratorRoleModel } from './models/moderator-role.model';
import { HotToastService } from '@ngneat/hot-toast';
import { AdminAddModeratorComponent } from './components/admin-add-moderator/admin-add-moderator.component';
import { User } from '../../../../../src/app/core/models/user/user.model';

@Component({
	selector: 'admin-moderators',
	templateUrl: './admin-moderators.component.html',
	styleUrls: ['./admin-moderators.component.scss'],
})
export class AdminModeratorsComponent implements OnInit {
	public roles$: Observable<any> = this.moderatorsService.roles$;
	public moderators$: Observable<any> = this.moderatorsService.moderators$;
	public rolesTableColumns: string[] = ['Role name', 'Role api`s', 'Actions'];
	public moderatorsTableColumns: string[] = [
		'Name',
		'Email',
		'Role name',
		'Actions',
	];
	public b2bNgxButtonTheme = B2bNgxButtonThemeEnum;

	constructor(
		private readonly moderatorsService: AdminModeratorsService,
		private readonly hotToastService: HotToastService,
		private readonly dialog: MatDialog
	) {}

	ngOnInit() {
		this.moderatorsService.getModeratorsList();
		this.moderatorsService.getModeratorRoles();
	}

	public openAddRoleDialog(): void {
		this.dialog.open(AdminAddModeratorRoleComponent);
	}

	public openAddModeratorDialog(): void {
		this.dialog.open(AdminAddModeratorComponent);
	}
	public changeModeratorRole(role: ModeratorRoleModel): void {
		this.dialog.open(AdminAddModeratorRoleComponent, {
			data: role,
		});
	}

	public deleteModeratorRole(role: ModeratorRoleModel): void {
		this.moderatorsService
			.deleteModeratorRole({ name: role.name })
			.pipe(
				first(),
				catchError((err) => {
					this.hotToastService.error(err.error.message);
					return of(err);
				})
			)
			.subscribe((res) => {
				if (res.error) return;
				this.hotToastService.success(
					`Role ${role.name} was successfully deleted`
				);
				this.moderatorsService.getModeratorRoles();
			});
	}

	public deleteModerator(moderator: User): void {
		this.moderatorsService
			.deleteModerator(moderator.email)
			.pipe(
				first(),
				catchError((err) => {
					this.hotToastService.error(err.error.message);
					return of(err);
				})
			)
			.subscribe((res) => {
				if (res.error) return;
				this.hotToastService.success(
					`Moderator ${moderator.fullName} was successfully deleted`
				);
				this.moderatorsService.getModeratorsList();
			});
	}
}
