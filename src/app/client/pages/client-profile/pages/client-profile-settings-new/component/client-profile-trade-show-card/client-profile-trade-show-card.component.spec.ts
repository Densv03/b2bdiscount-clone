import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileTradeShowCardComponent } from './client-profile-trade-show-card.component';

describe('ClientProfileTradeShowCardComponent', () => {
  let component: ClientProfileTradeShowCardComponent;
  let fixture: ComponentFixture<ClientProfileTradeShowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientProfileTradeShowCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientProfileTradeShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
