import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketCategoryCardComponent } from './market-category-card.component';

describe('MarketCategoryCardComponent', () => {
  let component: MarketCategoryCardComponent;
  let fixture: ComponentFixture<MarketCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketCategoryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
