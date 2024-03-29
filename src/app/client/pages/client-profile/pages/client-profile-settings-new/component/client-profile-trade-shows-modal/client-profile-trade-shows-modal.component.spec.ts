import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileTradeShowsModalComponent } from './client-profile-trade-shows-modal.component';

describe('ClientProfileTradeShowsModalComponent', () => {
  let component: ClientProfileTradeShowsModalComponent;
  let fixture: ComponentFixture<ClientProfileTradeShowsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientProfileTradeShowsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientProfileTradeShowsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
