import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileSourcingRequestManageRfqComponent } from './client-profile-sourcing-request-manage-rfq.component';

describe('ClientProfileTradebidManageRfqComponent', () => {
	let component: ClientProfileSourcingRequestManageRfqComponent;
	let fixture: ComponentFixture<ClientProfileSourcingRequestManageRfqComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientProfileSourcingRequestManageRfqComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(
			ClientProfileSourcingRequestManageRfqComponent
		);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
