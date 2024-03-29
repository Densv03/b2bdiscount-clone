import {DefaultModalButton} from "./client-profile-default-modal.interface";
import {B2bNgxButtonThemeEnum} from "@b2b/ngx-button";


export const defaultLabel = 'Confirmation'
export const defaultTitle: string | null = 'Are you sure?'

export const buttons: DefaultModalButton<boolean>[] = [
	{
		label: 'No',
		theme: B2bNgxButtonThemeEnum.OUTLINE_BLACK,
		result: false
	},
	{
		label: 'Yes',
		theme: B2bNgxButtonThemeEnum.BACKGROUND_BLUE,
		result: true
	}
]
