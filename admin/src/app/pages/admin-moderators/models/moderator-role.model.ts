import { ModeratorApiTypeModel } from './moderator-api-type.model';

export interface ModeratorRoleModel {
	apiTypes: ModeratorApiTypeModel[];
	createdAt: string;
	name: string;
	updatedAt: string;
	_id: string;
}
