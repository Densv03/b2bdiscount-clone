import {Section} from "../../interfaces/section.interface";

export interface ClientMediaSection extends Section<MediaSectionType> {}

export type MediaSectionType = 'image' | 'video'
