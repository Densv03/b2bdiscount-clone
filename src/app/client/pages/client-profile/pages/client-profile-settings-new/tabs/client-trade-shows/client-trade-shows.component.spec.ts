import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTradeShowsComponent } from './client-trade-shows.component';

describe('ClientTradeShowsComponent', () => {
  let component: ClientTradeShowsComponent;
  let fixture: ComponentFixture<ClientTradeShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientTradeShowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientTradeShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
