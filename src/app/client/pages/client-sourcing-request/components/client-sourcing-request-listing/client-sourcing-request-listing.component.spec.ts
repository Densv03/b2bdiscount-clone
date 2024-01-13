import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSourcingRequestListingComponent } from './client-sourcing-request-listing.component';

describe('ClientTradebidListingComponent', () => {
	let component: ClientSourcingRequestListingComponent;
	let fixture: ComponentFixture<ClientSourcingRequestListingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientSourcingRequestListingComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ClientSourcingRequestListingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
