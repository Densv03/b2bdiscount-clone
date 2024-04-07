import { Component, Input, OnInit } from '@angular/core';
import {
	GetNewBlogResponse
} from "../../../../../../../../admin/src/app/pages/admin-blog-post/types/admin-blog-post.type";

@Component({
  selector: 'b2b-blog-details-news',
  templateUrl: './blog-details-news.component.html',
  styleUrl: './blog-details-news.component.scss'
})
export class BlogDetailsNewsComponent implements OnInit{
	@Input() blog!: GetNewBlogResponse;

	ngOnInit() {
		console.log(this.blog)
	}


}
