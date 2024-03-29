import {Photo} from "../../../../../../../core/models/photo.model";

export type TradeShowType = 'upcoming' | 'participated'

export interface ClientTradeShowSection {
	type: TradeShowType;
	label: string;
	button: string;
}

export interface TradeShow {
	_id?: string;
	title?: string;
	type?: TradeShowType;
	startedAt?: Date;
	endedAt?: Date;
	images?: Photo[];
	company?: string,
	uploadedImages?: string[]; // for update
	path?: string;
}

export interface GetTradeShowList extends Pick<Partial<TradeShow>, '_id' | 'company' | 'path' | 'type'>{}
