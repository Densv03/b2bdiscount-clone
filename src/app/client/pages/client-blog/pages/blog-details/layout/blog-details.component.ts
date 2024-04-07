import { Component, inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "../../../../../services/blog/blog.service";

@Component({
  selector: 'b2b-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent {
	private route = inject(ActivatedRoute);
	private blogService = inject(BlogService);
	private id = this.route.snapshot.params['id'];
	public blog$ = this.blogService.getNewArticleById(this.id);
}
