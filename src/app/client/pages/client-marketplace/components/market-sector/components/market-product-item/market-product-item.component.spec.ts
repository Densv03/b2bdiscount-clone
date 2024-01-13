import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketProductItemComponent } from './market-product-item.component';

describe('MarketProductItemComponent', () => {
	let component: MarketProductItemComponent;
	let fixture: ComponentFixture<MarketProductItemComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [MarketProductItemComponent],
		});
		fixture = TestBed.createComponent(MarketProductItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
