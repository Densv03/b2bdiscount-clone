import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSubheaderComponent } from './client-subheader.component';

describe('ClientSubheaderComponent', () => {
	let component: ClientSubheaderComponent;
	let fixture: ComponentFixture<ClientSubheaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientSubheaderComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ClientSubheaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
