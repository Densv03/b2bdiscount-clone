import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileModalContainerComponent } from './client-profile-modal-container.component';

describe('ClientProfileModalContainerComponent', () => {
  let component: ClientProfileModalContainerComponent;
  let fixture: ComponentFixture<ClientProfileModalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientProfileModalContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientProfileModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
