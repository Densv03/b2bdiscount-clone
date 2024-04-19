import { Component, inject, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { BlogService } from "../../../../../services/blog/blog.service";
import { BlogCategoriesEnum } from '../../../../../../core/enums/blog-categories.enum';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
	GetNewBlogResponse
} from '../../../../../../../../admin/src/app/pages/admin-blog-post/types/admin-blog-post.type';
import { data } from 'autoprefixer';

@UntilDestroy()
@Component({
  selector: 'b2b-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent implements OnInit {
	private route = inject(ActivatedRoute);
	private blogService = inject(BlogService);
	public blog$: Observable<GetNewBlogResponse>;
	protected readonly BlogCategoriesEnum = BlogCategoriesEnum;


	ngOnInit(): void {
		this.blog$ =	this.route.params
			.pipe(
				filter(params => params['id']),
				switchMap(params => this.blogService.getNewArticleById(params['id'])),
				tap(blog => this.blogService.setArticleType(blog.data.typeArticle)),
				untilDestroyed(this))
	}
}
