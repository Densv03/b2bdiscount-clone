import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdvantagesComponent } from './client-advantages.component';

describe('ClientAdvantagesComponent', () => {
	let component: ClientAdvantagesComponent;
	let fixture: ComponentFixture<ClientAdvantagesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ClientAdvantagesComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ClientAdvantagesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
