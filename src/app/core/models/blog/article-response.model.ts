import { NewArticleModel } from './new-article.model';

export interface ArticleResponseModel {
	blogRecommendations: NewArticleModel[];
	data: NewArticleModel;
	footerRecommendations: NewArticleModel[];
}
