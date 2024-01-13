import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSourcingRequestRfqDetailsComponent } from './client-sourcing-request-rfq-details.component';

describe('ClientTradebidRfqDetailsComponent', () => {
	let component: ClientSourcingRequestRfqDetailsComponent;
	let fixture: ComponentFixture<ClientSourcingRequestRfqDetailsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientSourcingRequestRfqDetailsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ClientSourcingRequestRfqDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
