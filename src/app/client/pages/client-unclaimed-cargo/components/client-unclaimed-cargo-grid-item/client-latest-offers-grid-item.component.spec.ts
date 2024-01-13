import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLatestOffersGridItemComponent } from './client-latest-offers-grid-item.component';

describe('ClientLatestOffersGridItemComponent', () => {
	let component: ClientLatestOffersGridItemComponent;
	let fixture: ComponentFixture<ClientLatestOffersGridItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientLatestOffersGridItemComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ClientLatestOffersGridItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
