import {Photo} from "./photo.model";
import {Video} from "./video.model";
import {TradeShow} from "./trade-show.interface";
import {Base} from "./base.model";

export enum FolderStatus {
	DRAFT = 'draft',
	PUBLIC = 'public'
}

export interface Folder extends Base {
	title: string,
	description?: string;
	images?: Photo[];
	videos?: Video[];
	path?: string;
	status?: FolderStatus,
	company?: string;
}

export interface FolderUpdate extends Partial<Folder> {
	uploadedImages?: string[];
	uploadedVideos?: string[];
	videoLink?: string;
}

export interface GetFolderList extends Pick<Partial<Folder>, '_id' | 'company' | 'path' | 'status'>{}
