import {Folder} from "../../../../../../../core/models/folder.model";

export interface MediaModalData {
	folder: Folder,
	type: 'image' | 'video';
}
