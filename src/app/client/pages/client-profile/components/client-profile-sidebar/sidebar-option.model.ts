export interface SidebarOption {
	label: string;
	icon: string;
	path: string;
	hasSubMenu?: boolean;
	callback: () => void;
}
