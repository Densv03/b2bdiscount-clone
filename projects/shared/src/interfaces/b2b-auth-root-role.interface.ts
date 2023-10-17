export interface B2bAuthRootRoleInterface {
	description: string;
	displayName: string;
	explanation: string;
	name: 'supplier' | 'buyer';
	subRoles: B2bAuthSubRoleInterface[];
	title: string;
	_id: string;
}

interface B2bAuthSubRoleInterface {
	displayName: string;
	name: string;
	id: string;
}
