import { Injectable } from '@angular/core';
import {
	transformToSelect
} from "../../../../../../src/app/client/pages/client-profile/pages/client-profile-settings-new/tabs/client-company-information/client-company-information.constants";
import {
	ArticleStatus,
	ArticleTypes,
	CreateBlogFormGroupData,
	CreateBlogRequest,
	CreatingPostMessages,
	Tag
} from "../types/admin-blog-post.type";
import { of } from 'rxjs';
import _ from "lodash";
import { BlogService } from "../../../../../../src/app/client/services/blog/blog.service";
import { getFormData } from "../../../../../../src/app/core/helpers/function/get-form-data";
import { HotToastService } from "@ngneat/hot-toast";

@Injectable({
	providedIn: 'root'
})
export class AdminBlogPostService {

	constructor(private blogService: BlogService,
							private hotToastService: HotToastService) {
	}

	public articleTypes$() {
		return of(transformToSelect(ArticleTypes));
	}

	public prepareBlogRequest(body: CreateBlogFormGroupData): void {
		const clone = _.cloneDeep(body);
		const {datePublication, timePublication, description, ...rest} = clone;
		const request: CreateBlogRequest = {
			...rest, datePublication: this.getISOTime(datePublication, timePublication),
			readTime: this.countReadingTime(clone.description) + ' min',
			pullQuote: '',
			articleStatus: this.getArticleStatus(body),
			tags: clone.tags.map((tag: Tag) => tag.name),
			description: this.getUpdatedDescription(description)
		};
		console.log(request);
		this.blogService.createNewBlog(request).pipe(this.hotToastService.observe(CreatingPostMessages)).subscribe(data => {
			console.log(data);
		})
	}

	private getISOTime(datePublication?: Date, timePublication?: string): string {
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

	private getArticleStatus(body: CreateBlogFormGroupData): ArticleStatus {
		const {isDraft, timePublication, datePublication} = body
		if (timePublication && datePublication && !isDraft) {
			return 'published';
		} else if (!isDraft && !(timePublication || datePublication)) {
			return 'planned'
		} else {
			return 'draft';
		}
	}

	private getUpdatedDescription(description: string): string {
		return ''
	}
}
