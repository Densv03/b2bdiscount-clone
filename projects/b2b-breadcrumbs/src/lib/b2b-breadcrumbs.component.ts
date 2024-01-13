import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {mergeMap, switchMap} from "rxjs";

@UntilDestroy()
@Component({
	selector: 'b2b-breadcrumbs',
	templateUrl: './b2b-breadcrumbs.component.html',
	styleUrls: ['./b2b-breadcrumbs.component.scss']
})
export class B2bBreadcrumbsComponent implements OnInit {
	@Input() set breadcrumbLabel(value: string) {
		this.label = value;
	};

	public label: string;
	public breadcrumbs: { label: string, url: string, params?: Params, type?: string }[];

	constructor(private readonly router: Router,
							private readonly route: ActivatedRoute) {
	}

	ngOnInit() {
		this.route.data
			.pipe(
				switchMap(data => {
					this.breadcrumbs = data?.['breadcrumbs'];

					return this.route.queryParams;
				}),
				mergeMap(queryParams => {
					const filteredData = Object.keys(queryParams).reduce((acc: any, key) => {
						if (key !== 'category' && key !== 'childCategory' ) {
							acc[key] = queryParams[key];
						}
						return acc;
					}, {});

					Object.keys(queryParams).forEach(el => {
						if (el === 'companyId') {
							const listingIndex = this.breadcrumbs.findIndex(el => el.label === 'OFFERS');
							if (listingIndex) {
								this.breadcrumbs.splice(listingIndex, 1);
							}
							const label = queryParams[el].slice(0, queryParams[el].lastIndexOf('-'));
							this.addBreadcrumb(label, `/b2bmarket/company/${queryParams[el]}`);

						} else if (el === 'category' || el === 'childCategory') {
							if (!this.breadcrumbs.some(breadcrumb => breadcrumb.label === queryParams[el])) {
								let url = `${this.breadcrumbs[this.breadcrumbs.length - 1].url}/${queryParams[el]}`;
								this.addBreadcrumb(queryParams[el], url,
									Object.keys(filteredData).length > 0 ? filteredData : null);
							}
						}
					})

					return this.route.parent.params;
				}),
				mergeMap(params => {
					if (params?.['id'] && this.alreadyExist(params?.['id'] || params?.['category'] && this.alreadyExist(params?.['category']))) {
						const param = params?.['id'] || params?.['category'];
						const url = this.router.url.substring(0, this.router.url.indexOf(param) + param.length);
						this.addBreadcrumb(param, url);
					}

					return this.route.params;
				}),
				untilDestroyed(this)
			).subscribe(childParams => {

			if (childParams?.['id'] && this.alreadyExist(childParams?.['id']) || childParams?.['category'] && this.alreadyExist(childParams?.['category'])) {
				const param = childParams?.['id'] || childParams?.['category'];
				const url = this.router.url.substring(0, this.router.url.indexOf(param) + param.length);
				this.addBreadcrumb(param, url, null, childParams?.['category'] ? 'category' : null);
			}

			if (childParams?.['childCategory'] && this.alreadyExist(childParams?.['childCategory'])) {
				const url = this.router.url.substring(0, this.router.url.indexOf(childParams['childCategory']) + childParams['childCategory'].length);
				this.addBreadcrumb(childParams['childCategory'], url)
			}

			if (childParams?.['productId'] && this.alreadyExist(childParams?.['productId'])) {
				const url = this.router.url;
				this.addBreadcrumb(childParams['productId'], url);
			}

			if (this.label) {
				this.setLabel(this.label);
			}
		})
	}

	private setLabel(label: string): void {
		this.breadcrumbs[this.breadcrumbs.length - 1].label = label;

		if (this.breadcrumbs[this.breadcrumbs?.length - 2].url.includes('/products/')) {
			this.breadcrumbs.splice(this.breadcrumbs.length - 2, 1);
		}
	}

	private alreadyExist(label: string): boolean {
		return !this.breadcrumbs.some(el => el.label === label)
	}

	private addBreadcrumb(label: string, url: string, params?: Params, type?: string): void {

		if (this.breadcrumbs.some(el => el?.type === 'category')) {
			const index= this.breadcrumbs.indexOf(this.breadcrumbs.find(el => el?.type === 'category'));
			this.breadcrumbs.splice(index, 1);
		}

		this.breadcrumbs = [...this.breadcrumbs, {
			label: label,
			url: url,
			params,
			type
		}];
	}

}
