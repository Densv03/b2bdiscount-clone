import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketUpdatesSectionComponent } from './market-updates-section.component';

describe('MarketUpdatesSectionComponent', () => {
  let component: MarketUpdatesSectionComponent;
  let fixture: ComponentFixture<MarketUpdatesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketUpdatesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketUpdatesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
