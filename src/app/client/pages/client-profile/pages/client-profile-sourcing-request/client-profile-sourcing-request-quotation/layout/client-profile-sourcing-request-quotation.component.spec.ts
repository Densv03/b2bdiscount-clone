import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileSourcingRequestQuotationComponent } from './client-profile-sourcing-request-quotation.component';

describe('ClientProfileTradebidQuotationComponent', () => {
	let component: ClientProfileSourcingRequestQuotationComponent;
	let fixture: ComponentFixture<ClientProfileSourcingRequestQuotationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientProfileSourcingRequestQuotationComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(
			ClientProfileSourcingRequestQuotationComponent
		);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
