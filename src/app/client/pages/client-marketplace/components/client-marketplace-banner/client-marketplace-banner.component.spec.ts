import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMarketplaceBannerComponent } from './client-marketplace-banner.component';

describe('ClientMarketplaceBannerComponent', () => {
	let component: ClientMarketplaceBannerComponent;
	let fixture: ComponentFixture<ClientMarketplaceBannerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClientMarketplaceBannerComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ClientMarketplaceBannerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
