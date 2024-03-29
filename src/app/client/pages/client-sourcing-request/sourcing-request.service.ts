import { Injectable } from '@angular/core';
import {
	BehaviorSubject,
	Observable,
	of,
	publish,
	refCount,
	share,
	Subject,
} from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api/api.service';
// import { AuthService } from "../../../auth/services/auth/auth.service";
// import { io } from "socket.io-client";
import { environment } from '../../../../environments/environment';
import { PublicCompanyInfoModel } from '../../../core/models/public-company-info.model';
import { PublicCompanyInfoForSector } from '../../../core/models/public-company-info-for-sector.model';

interface SelectItem {
	id: string;
	value: string;
}

@Injectable({
	providedIn: 'root',
})
export class SourcingRequestService {
	private rfqListSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
		[]
	);
	private rfqListIsLoadedSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	private totalLengthSource: BehaviorSubject<number> =
		new BehaviorSubject<number>(0);
	private companyInfoSource: Subject<PublicCompanyInfoModel> =
		new Subject<PublicCompanyInfoModel>();
	private socket: any;

	constructor(private apiService: ApiService) {}

	get rfqList$(): Observable<any> {
		return this.rfqListSource.asObservable();
	}
	get rfqListLoadingStatus$(): Observable<any> {
		return this.rfqListIsLoadedSource.asObservable();
	}

	get rfqListLength$(): Observable<number> {
		return this.totalLengthSource.asObservable();
	}
	get companyInfo$(): Observable<PublicCompanyInfoModel> {
		return this.companyInfoSource.asObservable();
	}

	public getRfq(queryString: string): Observable<any> {
		return this.apiService.get(`tradeBid/get-rfq${queryString}`);
	}

	public updateRfqList(queryString: string): void {
		this.rfqListIsLoadedSource.next(false);
		this.getRfq(queryString)
			.pipe(first())
			.subscribe((data) => {
				this.rfqListIsLoadedSource.next(true);
				this.rfqListSource.next(data.rfqList);
				this.totalLengthSource.next(data.totalCount);
			});
	}

	public getRfqByIdAdmin(RfqId: string): Observable<any> {
		return this.apiService
			.get<any>(`tradeBid/get-rfq-quotations-admin/${RfqId}`)
			.pipe(filter((data) => !!data));
	}

	public getRfqById(rfqId: string): Observable<any> {
		return this.apiService.get<any>(`tradeBid/rfq/${rfqId}`);
	}

	public createRFQ(body: any): Observable<any> {
		return this.apiService.post('tradeBid/create-rfq', body);
	}

	public getObservableForSelect(arr: string[]): Observable<SelectItem[]> {
		return of(
			arr.map((el) => {
				return {
					id: el,
					value: el,
				};
			})
		);
	}

	public getCompanyInfoById(id: string): Observable<PublicCompanyInfoModel> {
		return this.apiService
			.get<PublicCompanyInfoModel>(`tradeBid/getCompany/${id}`)
			.pipe(filter((data) => !!data));
	}

	public createQuotation(body: any): Observable<any> {
		return this.apiService.post('tradeBid/create-quotation', body);
	}

	public getCompanyData(): Observable<PublicCompanyInfoModel> {
		return this.apiService.get('tradeBid/get-company-data');
	}

	public getNewCompanies(): Observable<
		{ companies: PublicCompanyInfoForSector[] }[]
	> {
		return this.apiService.get('tradeBid/getCompanies');
	}

	public createCompanyInfo(
		body: Partial<PublicCompanyInfoModel>
	): Observable<any> {
		return this.apiService.post('tradeBid/create-company-data', body);
	}

	public updateCompanyInfo(body: any): Observable<any> {
		return this.apiService.post('tradeBid/update-company-data', body);
	}

	public deleteBanner() {
		return this.apiService.delete('company/delete-company-banner')
	}

	public deleteLogo() {
		return this.apiService.delete('company/delete-company-logo')
	}

	public deleteCompanyDocuments(
		companyId: string,
		documentIds: string[]
	): Observable<ArrayBuffer> {
		return this.apiService.delete(
			`tradeBid/company/${companyId}/files/delete`,
			{ body: { documents: documentIds } }
		);
	}

	public updateCompanyDataAdmin(id: string, body: any): Observable<any> {
		return this.apiService.put('tradeBid/update-company-data-admin', {
			...body,
			id,
		});
	}

	public sendMessageToSeller(rfq: any, message: string): void {
		// this.openConnection(this.authService.getToken());

		this.socket.emit('message', {
			type: 'text',
			body: message,
			userId: rfq.user._id,
			rfqId: rfq._id,
			typeRoom: 'rfq',
		});
	}

	public updateRfqAdmin(data: any): Observable<any> {
		return this.apiService.patch(`tradeBid/update-rfq-admin`, data);
	}

	private openConnection(token: any) {
		if (this.socket) {
			this.socket.disconnect();
		}

		// this.socket = io(environment.apiUrl, {
		// 	path: "/chat",
		// 	auth: {
		// 		token,
		// 	},
		// });
	}
}
