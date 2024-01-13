import { PopupTypeEnum } from './popup-type.emun';
import { TooltipTypeEnum } from './tooltip-type.enum';

export interface HeaderMainOption {
	name: string;
	type: PopupTypeEnum;
}
export interface HeaderSearchOption {
	name: string;
	type: TooltipTypeEnum;
}
