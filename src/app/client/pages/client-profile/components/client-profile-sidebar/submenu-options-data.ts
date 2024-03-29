import { SidebarOption } from './sidebar-option.model';
import { subMenuType } from './profile-sidebar.service';
import { OmitCallback } from '../../../../shared/models/omit-callback.model';

export type submenuOptions = Record<
	subMenuType,
	Array<OmitCallback<SidebarOption>>
>;
export const submenuOptionsData: submenuOptions = {
	settings: [
		{
			label: 'My account',
			icon: '/assets/icons/header/profile/my-account.svg',
			path: '/profile/your-account/settings/profile',
		},
		{
			label: 'Company information',
			icon: '/assets/icons/sidebar/company-info.svg',
			path: '/profile/your-account/settings',
		},
		{
			label: 'Following products',
			icon: '/assets/icons/sidebar/following-products.svg',
			path: '/profile/your-account/settings/following-products',
		},
	],
};
