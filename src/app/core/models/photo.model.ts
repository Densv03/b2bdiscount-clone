import {Media} from "./media.model";

export interface Photo extends Media {
	serialNumber?: number;
	imageName?: string;
	sm?: string;
	md?: string;
	lg?: string;
}
