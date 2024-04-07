import { Component } from '@angular/core';
import { MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'b2b-blog-menu-mobile-dialog',
  standalone: true,
	imports: [
		MatDialogClose,
		MatIcon,
		RouterLinkActive,
		RouterLink,
	],
  templateUrl: './blog-menu-mobile-dialog.component.html',
  styleUrl: './blog-menu-mobile-dialog.component.scss'
})
export class BlogMenuMobileDialogComponent {
	public menuLinks: {displayName: string, link: string}[];

	constructor(private readonly matDialogRef: MatDialogRef<BlogMenuMobileDialogComponent>) {
	}

	public closeDialogWithRouting(): void {
		this.matDialogRef.close(true);
	}
}
