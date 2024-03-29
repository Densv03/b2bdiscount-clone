import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileSettingsNewComponent } from './client-profile-settings-new.component';

describe('ClientProfileSettingsNewComponent', () => {
	let component: ClientProfileSettingsNewComponent;
	let fixture: ComponentFixture<ClientProfileSettingsNewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ClientProfileSettingsNewComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ClientProfileSettingsNewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
