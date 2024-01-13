import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketAdvertisingMaterialsComponent } from './market-advertising-materials.component';

describe('MarketAdvertisingMaterialsComponent', () => {
	let component: MarketAdvertisingMaterialsComponent;
	let fixture: ComponentFixture<MarketAdvertisingMaterialsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [MarketAdvertisingMaterialsComponent],
		});
		fixture = TestBed.createComponent(MarketAdvertisingMaterialsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
