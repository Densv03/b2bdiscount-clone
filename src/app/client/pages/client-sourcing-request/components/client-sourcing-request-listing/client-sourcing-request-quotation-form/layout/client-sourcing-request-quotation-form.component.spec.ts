import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSourcingRequestQuotationFormComponent } from './client-sourcing-request-quotation-form.component';

describe('ClientTradebidQuotationFormComponent', () => {
	let component: ClientSourcingRequestQuotationFormComponent;
	let fixture: ComponentFixture<ClientSourcingRequestQuotationFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientSourcingRequestQuotationFormComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(
			ClientSourcingRequestQuotationFormComponent
		);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
