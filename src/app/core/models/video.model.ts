import {Media} from "./media.model";

export interface Video extends Partial<Media> {
	link?: string;
}
