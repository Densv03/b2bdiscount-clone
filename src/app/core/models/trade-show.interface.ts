import {Photo} from "./photo.model";
import { Section } from "../../client/pages/client-profile/pages/client-profile-settings-new/interfaces/section.interface";
import {Base} from "./base.model";

export type TradeShowType = 'upcoming' | 'participated'

export interface ClientTradeShowSection extends Section<TradeShowType> {
}

export interface TradeShow extends Base {
	title?: string;
	description?: string;
	type?: TradeShowType;
	startedAt?: Date;
	endedAt?: Date;
	images?: Photo[];
	company?: string,
	uploadedImages?: string[]; // for update
	path?: string;
}

export interface GetTradeShowList extends Pick<Partial<TradeShow>, '_id' | 'company' | 'path' | 'type'>{}
