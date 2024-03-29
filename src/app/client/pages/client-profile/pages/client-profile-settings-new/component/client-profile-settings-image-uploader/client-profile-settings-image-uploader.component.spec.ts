import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileSettingsImageUploaderComponent } from './client-profile-settings-image-uploader.component';

describe('ClientProfileSettingsImageUploaderComponent', () => {
	let component: ClientProfileSettingsImageUploaderComponent;
	let fixture: ComponentFixture<ClientProfileSettingsImageUploaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ClientProfileSettingsImageUploaderComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(
			ClientProfileSettingsImageUploaderComponent
		);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
