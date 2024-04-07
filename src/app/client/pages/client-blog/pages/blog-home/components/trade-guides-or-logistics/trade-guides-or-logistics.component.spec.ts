import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeGuidesOrLogisticsComponent } from './trade-guides-or-logistics.component';

describe('TradeGuidesOrLogisticsComponent', () => {
  let component: TradeGuidesOrLogisticsComponent;
  let fixture: ComponentFixture<TradeGuidesOrLogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeGuidesOrLogisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TradeGuidesOrLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
