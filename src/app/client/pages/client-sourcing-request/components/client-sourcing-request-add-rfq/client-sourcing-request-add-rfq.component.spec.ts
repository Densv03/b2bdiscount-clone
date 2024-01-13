import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSourcingRequestAddRfqComponent } from './client-sourcing-request-add-rfq.component';

describe('ClientTradebidAddRfqComponent', () => {
	let component: ClientSourcingRequestAddRfqComponent;
	let fixture: ComponentFixture<ClientSourcingRequestAddRfqComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientSourcingRequestAddRfqComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ClientSourcingRequestAddRfqComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
