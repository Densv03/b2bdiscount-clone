import { User } from '../../../../src/app/core/models/user/user.model';

const defaultSideNavData = [
	{
		label: 'USERS',
		path: 'users',
	},
	{
		label: 'OFFERS',
		path: 'offers',
	},
	// {
	// 	label: "WIKI ARTICLES",
	// 	path: "articles",
	// },
	{
		label: 'MANAGER',
		path: 'manager',
	},
	{
		label: 'SOURCING REQUEST',
		path: 'sourcing-request',
	},
	{
		label: 'MARKET',
		path: 'b2bmarket',
	},
	{
		label: 'MODERATORS',
		path: 'moderators',
	},
	{
		label: 'HOMEPAGE',
		path: 'homepage',
	},
	{
		label: 'COMPANIES',
		path: 'companies',
	},
	{
		label: 'BLOG',
		path: 'blog',
	},
	{
		label: 'BILLING',
		path: 'billing',
	},
	{
		label: 'LOGISTIC',
		path: 'logistic',
	},
	{
		label: 'LOGOUT',
		path: 'logout',
	},
];

export class AdminSidenavData {
	static sideNavData = defaultSideNavData;
	static updateModeratorSidenavData(moderator: User): void {
		const availableModeratorApi = moderator.moderatorRole.apiTypes.map(
			(type) => type.name
		);
		AdminSidenavData.sideNavData = AdminSidenavData.sideNavData.filter(
			(item) =>
				availableModeratorApi.includes(item.label) || item.path === 'logout'
		);
	}
	static restoreSideNavToDefaultState(): void {
		AdminSidenavData.sideNavData = defaultSideNavData;
	}
}
