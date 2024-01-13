import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SourcingRequestService } from '../../../client/pages/client-sourcing-request/sourcing-request.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class CompanyInformationGuard {
	private queryParams: string[];

	constructor(
		private sourcingRequestService: SourcingRequestService,
		private router: Router
	) {
		this.queryParams = ['add-rfq', 'quotation', 'offer', 'b2bmarket'];
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		const link: string = '/sourcing-request/company-information';

		const splitURL = state.url.split('/');
		let blockedURL = '';
		splitURL.forEach((item) => {
			if (this.queryParams.includes(item)) {
				blockedURL = item;
			}
		});

		return this.sourcingRequestService.getCompanyData().pipe(
			catchError(() => {
				this.sourcingRequestService
					.updateCompanyInfo({ companyName: '' })
					.subscribe();
				return this.sourcingRequestService.getCompanyData();
			}),
			map((companyData: any) => {
				const requiredFields: string[] = [
					'address',
					'annualRevenue',
					'companyDescription',
					'companyName',
					'country',
					'email',
					'employeesNumber',
					'phone',
					'position',
					'user',
					'yearOfFoundation',
				];
				if (requiredFields.some((field) => companyData[field] === undefined)) {
					this.router.navigate([link], { queryParams: { url: blockedURL } });
					return false;
				}
				for (const key in companyData) {
					if (
						(companyData[key] === null ||
							companyData[key] === undefined ||
							companyData[key] === '') &&
						key !== 'website'
					) {
						if (blockedURL === 'quotation') {
							localStorage.setItem('quotationId', state.url.split('/')[3]);
						}
						this.router.navigate([link], { queryParams: { url: blockedURL } });
						return false;
					}
					if (Array.isArray(companyData[key]) && requiredFields.includes(key)) {
						if (companyData[key].length === 0) {
							if (blockedURL === 'quotation') {
								localStorage.setItem('quotationId', state.url.split('/')[3]);
							}
							this.router.navigate([link], {
								queryParams: { url: blockedURL },
							});
							return false;
						}
					}
				}
				return true;
			})
		);
	}
}
