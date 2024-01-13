import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLatestOffersGridBannerComponent } from './client-latest-offers-grid-banner.component';

describe('ClientLatestOffersGridBannerComponent', () => {
	let component: ClientLatestOffersGridBannerComponent;
	let fixture: ComponentFixture<ClientLatestOffersGridBannerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientLatestOffersGridBannerComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ClientLatestOffersGridBannerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
