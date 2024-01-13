import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileSourcingRequestRfqComponent } from './client-profile-sourcing-request-rfq.component';

describe('ClientProfileTradebidRfqComponent', () => {
	let component: ClientProfileSourcingRequestRfqComponent;
	let fixture: ComponentFixture<ClientProfileSourcingRequestRfqComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientProfileSourcingRequestRfqComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ClientProfileSourcingRequestRfqComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
