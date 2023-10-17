import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import { mergeMap, switchMap } from "rxjs";

@UntilDestroy()
@Component({
	selector: 'b2b-breadcrumbs',
	templateUrl: './b2b-breadcrumbs.component.html',
	styleUrls: ['./b2b-breadcrumbs.component.scss']
})
export class B2bBreadcrumbsComponent implements OnInit {
	@Input() set breadcrumbLabel(value: string) {
		this.setLabel(value);
	};

	public breadcrumbs: { label: string, url: string, params?: Params }[];

	constructor(private readonly router: Router,
							private readonly route: ActivatedRoute) {
	}

	ngOnInit() {
		this.route.data
			.pipe(switchMap(data => {
					this.breadcrumbs = data?.['breadcrumbs'];

					return this.route.parent.params;
				}),
				mergeMap(params => {
					if (params?.['id']) {
						this.breadcrumbs = [...this.breadcrumbs, {
							label: params['id'],
							url: this.router.url.substring(0, this.router.url.indexOf(params['id']) + params['id'].length)
						}]
					}

					return this.route.params;
				}),
				untilDestroyed(this)
			).subscribe(childParams => {
			const alreadyExist = this.breadcrumbs.some(el => el.label === childParams?.['id'])
			if (childParams?.['id'] && !alreadyExist) {
				this.breadcrumbs = [...this.breadcrumbs, {
					label: childParams['id'],
					url: this.router.url.substring(0, this.router.url.indexOf(childParams['id']) + childParams['id'].length)
				}]
			}
			if (childParams?.['childCategory']) {
				this.breadcrumbs = [...this.breadcrumbs, {
					label: childParams['childCategory'],
					url: this.router.url.substring(0, this.router.url.indexOf(childParams['childCategory']) + childParams['childCategory'].length)
				}];
			}

			if (childParams?.['productId']) {
				this.breadcrumbs = [...this.breadcrumbs, {
					label: childParams['productId'],
					url: this.router.url
				}];
			}
		})
	}

	private setLabel(label: string): void {
		if (label) {
			this.breadcrumbs[this.breadcrumbs.length - 1].label = label;

			if (this.breadcrumbs[this.breadcrumbs?.length - 2].url.includes('/products/')) {
				this.breadcrumbs.splice(this.breadcrumbs.length - 2, 1);
			}
		}
	}
}
