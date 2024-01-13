import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileSourcingRequestChatsComponent } from './client-profile-sourcing-request-chats.component';

describe('ClientProfileTradebidChatsComponent', () => {
	let component: ClientProfileSourcingRequestChatsComponent;
	let fixture: ComponentFixture<ClientProfileSourcingRequestChatsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientProfileSourcingRequestChatsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(
			ClientProfileSourcingRequestChatsComponent
		);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
