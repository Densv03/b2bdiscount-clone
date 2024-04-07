import { Component, Input } from '@angular/core';

@Component({
	selector: 'b2b-admin-blog-list',
	templateUrl: './admin-blog-list.component.html',
	styleUrls: ['./admin-blog-list.component.scss'],
})
export class AdminBlogListComponent {
	@Input() articles: any[];
	@Input() menuOptions: any[];

	public getArticleIconByStatus(status: string): {fontIcon: string, toolTip: string} {
		if (status === 'draft') {
			return {fontIcon: 'edit', toolTip: 'Draft'};
		} else if (status === 'published') {
			return {fontIcon: 'visibility', toolTip: 'Published'};
		} else if (status === 'planned') {
			return {fontIcon: 'schedule', toolTip: 'Planned'};
		} else {
			return {fontIcon: 'error', toolTip: 'Unknown status'};
		}
	}
}
