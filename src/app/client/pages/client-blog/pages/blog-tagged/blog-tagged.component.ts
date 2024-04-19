import { Component, inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "../../../../services/blog/blog.service";
import { BehaviorSubject, switchMap } from "rxjs";
import { AsyncPipe, DatePipe } from "@angular/common";
import { B2bNgxImageModule } from "@b2b/ngx-image";
import { B2bNgxPaginationModule } from "@b2b/ngx-pagination";
import { PaginationModule } from "../../../../shared/components/pagination/pagination.module";

@Component({
  selector: 'b2b-blog-tagged',
  standalone: true,
	imports: [
		AsyncPipe,
		B2bNgxImageModule,
		DatePipe,
		B2bNgxPaginationModule,
		PaginationModule
	],
  templateUrl: './blog-tagged.component.html',
  styleUrl: './blog-tagged.component.scss'
})
export class BlogTaggedComponent {
	private route = inject(ActivatedRoute);
	private blogService = inject(BlogService);
	public tag = this.route.snapshot.params['tag'];
	public articles$ = this.blogService.getTagByName(this.tag).pipe(
		switchMap(tag => this.blogService.getNewArticles(0, undefined, undefined,tag._id))
	);
	public ITEMS_PER_PAGE = 10;
	private currentPageSource = new BehaviorSubject<number>(1);
	public currentPage$ = this.currentPageSource.asObservable();
	public setPage(page: number): void {
		const offset = (page - 1) * this.ITEMS_PER_PAGE;
		this.currentPageSource.next(page);
		this.articles$ = this.blogService.getTagByName(this.tag).pipe(switchMap(tag => this.blogService.getNewArticles(offset, undefined, undefined, tag._id)));
	}

	constructor() {
		this.articles$.subscribe(articles => {
			console.log(articles);
		})
	}
}
