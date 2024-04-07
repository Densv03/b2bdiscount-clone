import { PageTab, TabLabel } from '../../client-profile-settings.type';

export const tabs: PageTab[] = [
	{
		label: TabLabel.COMPANY_INFORMATION,
		path: '',
		active: false,
	},
	// {
	//     label:  TabLabel.VERIFICATION,
	//     path:   '',
	//     active: false,
	// },
	{
		label: TabLabel.PAYMENT_AND_SHIPPING,
		path: '',
		active: false,
	},
	{
		label: TabLabel.OUR_ADVANTAGES,
		path: '',
		active: false,
	},
	{
		label: TabLabel.DOCUMENTS,
		path: '',
		active: false,
	},
	{
		label: TabLabel.TRADE_SHOWS,
		path: '',
		active: false,
	},
	{
		label: TabLabel.MEDIA,
		path: '',
		active: false,
	},
];

export const defaultTab: PageTab = tabs[0];
