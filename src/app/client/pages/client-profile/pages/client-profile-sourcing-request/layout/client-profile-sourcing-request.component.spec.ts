import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileSourcingRequestComponent } from './client-profile-sourcing-request.component';

describe('ClientProfileTradebidComponent', () => {
	let component: ClientProfileSourcingRequestComponent;
	let fixture: ComponentFixture<ClientProfileSourcingRequestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientProfileSourcingRequestComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ClientProfileSourcingRequestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
