import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileDefaultModalComponent } from './client-profile-default-modal.component';

describe('ClientProfileDefaultModalComponent', () => {
  let component: ClientProfileDefaultModalComponent<any>;
  let fixture: ComponentFixture<ClientProfileDefaultModalComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientProfileDefaultModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientProfileDefaultModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
