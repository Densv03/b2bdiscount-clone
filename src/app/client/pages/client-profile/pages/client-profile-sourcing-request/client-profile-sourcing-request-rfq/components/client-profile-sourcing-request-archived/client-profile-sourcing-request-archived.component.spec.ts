import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileSourcingRequestArchivedComponent } from './client-profile-sourcing-request-archived.component';

describe('ClientProfileTradebidArchivedComponent', () => {
	let component: ClientProfileSourcingRequestArchivedComponent;
	let fixture: ComponentFixture<ClientProfileSourcingRequestArchivedComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientProfileSourcingRequestArchivedComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(
			ClientProfileSourcingRequestArchivedComponent
		);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
