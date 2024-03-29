import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileSettingsTabsComponent } from './client-profile-settings-tabs.component';

describe('ClientProfileSettingsTabsComponent', () => {
	let component: ClientProfileSettingsTabsComponent;
	let fixture: ComponentFixture<ClientProfileSettingsTabsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ClientProfileSettingsTabsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ClientProfileSettingsTabsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
