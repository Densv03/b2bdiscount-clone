import { NewArticleModel } from './new-article.model';

export interface BlogHomepageModel {
	data: BlogHomePageData;
	status: string;
}

export interface BlogHomePageData {
	lastFiveMarketUpdates: NewArticleModel[];
	lastFourMarketExperts: NewArticleModel[];
	lastFourPublication: NewArticleModel[];
	lastSixNews: NewArticleModel[];
	lastThreeAnalysis: NewArticleModel[];
	lastTwoLogistics: NewArticleModel[];
	lastTwoTradeGuide: NewArticleModel[];
}
