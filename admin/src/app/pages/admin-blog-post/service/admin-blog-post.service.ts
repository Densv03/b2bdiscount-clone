import { Injectable } from '@angular/core';
import {
	transformToSelect
} from "../../../../../../src/app/client/pages/client-profile/pages/client-profile-settings-new/tabs/client-company-information/client-company-information.constants";
import {
	ArticleStatus,
	ArticleTypes,
	BlogArticle,
	CreateBlogFormGroupData,
	CreateBlogRequest,
	Tag
} from "../types/admin-blog-post.type";
import { of } from 'rxjs';
import _ from "lodash";
import { BlogService } from "../../../../../../src/app/client/services/blog/blog.service";
import { HotToastService } from "@ngneat/hot-toast";

@Injectable({
	providedIn: 'root'
})
export class AdminBlogPostService {

	public articleTypes$() {
		return of(transformToSelect(ArticleTypes));
	}

	public prepareBlogRequest(body: CreateBlogFormGroupData, initialData?: BlogArticle): CreateBlogRequest {
		const clone = _.cloneDeep(body);
		const {datePublication, timePublication, description, isDraft, ...rest} = clone;
		return {
			...rest, datePublication: this.getISOTime(datePublication, timePublication),
			readTime: this.countReadingTime(clone.description) + ' min',
			pullQuote: '',
			articleStatus: this.getArticleStatus(body, initialData),
			tags: clone.tags.map((tag: Tag) => tag.name),
			description: this.getUpdatedDescription(description)
		};
	}

	public getISOTime(datePublication?: Date, timePublication?: string): string {
		if (!datePublication || !timePublication) {
			return new Date().toISOString();
		}
		const [hours, minutes] = timePublication.split(":").map(Number);
		datePublication.setHours(hours, minutes);
		return datePublication.toISOString();
	}

	private countReadingTime(html: string): number {
		const text = html.replace(/<[^>]*>/g, '');
		const wordCount = text.split(/\s+/).filter(Boolean).length;
		const averageReadingSpeedWPM = 225;
		const readingTimeMinutes = wordCount / averageReadingSpeedWPM;
		return Math.ceil(readingTimeMinutes);
	}

	private getArticleStatus(body: CreateBlogFormGroupData, initialData?: BlogArticle): ArticleStatus {
		if (initialData) {
			return initialData.articleStatus;
		}
		const {isDraft, timePublication, datePublication} = body;
		if (!timePublication && !datePublication && !isDraft) {
			return 'published';
		} else if (isDraft) {
			return 'draft';
		} else {
			return 'planned';
		}
	}

	private getUpdatedDescription(description: string): string {
		return description
			.replaceAll('<a', '<a rel="nofollow"')
			.replaceAll('<a', '<a target="_blank""');
	}
}
