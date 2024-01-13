import { Component, OnDestroy } from '@angular/core';
import { PlatformService } from '../../../../src/app/client/services/platform/platform.service';
import { ActivatedRoute } from '@angular/router';
import { Layout } from './layout.enum';
import { Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
	// Variables
	layout: Layout;
	destroy$ = new Subject();

	constructor(private route: ActivatedRoute) {}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.complete();
	}

	ngOnInit() {
		this.route.data.pipe(takeUntil(this.destroy$)).subscribe((res) => {
			this.layout = res['layout'];
		});
	}

	protected readonly Layout = Layout;
}
