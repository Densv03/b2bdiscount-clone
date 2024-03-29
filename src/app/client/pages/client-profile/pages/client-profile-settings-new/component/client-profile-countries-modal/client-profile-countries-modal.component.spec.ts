import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileCountriesModalComponent } from './client-profile-countries-modal.component';

describe('ClientProfileCountriesModalComponent', () => {
  let component: ClientProfileCountriesModalComponent;
  let fixture: ComponentFixture<ClientProfileCountriesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientProfileCountriesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientProfileCountriesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
