import { Component, Input } from '@angular/core';
import { BlogCategoriesEnum } from '../../../../../core/enums/blog-categories.enum';

@Component({
  selector: 'b2b-blog-section-header',
  standalone: true,
  imports: [],
  templateUrl: './blog-section-header.component.html',
  styleUrl: './blog-section-header.component.scss'
})
export class BlogSectionHeaderComponent {
	@Input() sectionTitle: BlogCategoriesEnum;
	@Input() sectionDescription: string;
}
