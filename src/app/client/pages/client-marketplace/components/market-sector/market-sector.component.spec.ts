import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSectorComponent } from './market-sector.component';

describe('NewB2bmarketComponent', () => {
	let component: MarketSectorComponent;
	let fixture: ComponentFixture<MarketSectorComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [MarketSectorComponent],
		});
		fixture = TestBed.createComponent(MarketSectorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
