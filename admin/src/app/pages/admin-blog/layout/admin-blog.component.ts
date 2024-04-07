import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WikiService } from '../../../../../../src/app/client/services/wiki/wiki.service';
import { combineLatest, filter, mergeMap, Subject, tap } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { B2bNgxLinkThemeEnum } from 'projects/ngx-link/src/public-api';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HotToastService } from '@ngneat/hot-toast';
import { BlogService } from '../../../../../../src/app/client/services/blog/blog.service';
import { MatDialog } from '@angular/material/dialog';
import {
	ConfirmationDialogComponent
} from '../../../../../../src/app/client/shared/components/confirmation-dialog/confirmation-dialog.component';
import { B2bNgxButtonThemeEnum } from 'projects/ngx-button/src/public-api';
import { ArticleStatuses, ArticleTypes } from "../../admin-blog-post/types/admin-blog-post.type";

@UntilDestroy()
@Component({
	selector: 'b2b-admin-blog',
	templateUrl: './admin-blog.component.html',
	styleUrls: ['./admin-blog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBlogComponent {
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;
	public articles$: any;
	public readonly menuOptions: any;

	public readonly pageSubject: Subject<any>;
	public readonly forceSubject = new Subject();

	public totalCount: number;

	constructor(
		private readonly _wikiService: WikiService,
		private readonly _blogService: BlogService,
		private readonly hotToastService: HotToastService,
		private readonly dialog: MatDialog
	) {
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;

		this.pageSubject = new Subject<any>();

		this.articles$ = this._getArticles$();
		this.menuOptions = this._getMenuOptions();

		this.totalCount = 0;
	}

	private _getArticles$() {
		const page$ = this.pageSubject.asObservable().pipe(startWith(1));
		return page$.pipe(
			this.hotToastService.observe({
				loading: 'Loading articles',
				success: 'Articles loaded',
				error: 'Articles loading failed',
			}),
			switchMap(page =>
				this._blogService.getNewArticles((page - 1) * 10, ArticleTypes, ArticleStatuses)
					.pipe(
						tap(data => this.totalCount = data.count),
						map(data => data.data))
			)
		);
	}

	public setPage(event: any) {
		this.pageSubject.next(event);
	}

	private _getMenuOptions() {
		return [
			{
				label: 'Delete',
				icon: 'delete-red',
				onClick: (user: { _id: any }) => {
					this.dialog
						.open(ConfirmationDialogComponent, {
							data: {
								title: 'Delete product',
								message: 'Are you sure you want to delete this article?',
								confirmButtonText: 'Delete',
								confirmButtonTheme: B2bNgxButtonThemeEnum.BACKGROUND_RED,
								cancelButtonText: 'Cancel',
								cancelButtonTheme: B2bNgxButtonThemeEnum.OUTLINE_BLACK,
							},
						})
						.afterClosed()
						.pipe(
							filter((data) => !!data),
							mergeMap(() => {
								return this._blogService.deleteNewArticle(user._id).pipe(
									untilDestroyed(this),
									this.hotToastService.observe({
										loading: 'Post deleting',
										success: 'Post deleted',
										error: 'Post deleting failed',
									})
								);
							})
						)
						.subscribe(() => {
							this.forceSubject.next(true);
							this.articles$ = this._getArticles$();
							this.pageSubject.next(1);
						});
				},
			},
		];
	}
}
