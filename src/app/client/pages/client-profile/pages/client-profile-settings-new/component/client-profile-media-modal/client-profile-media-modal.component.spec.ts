import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileMediaModalComponent } from './client-profile-media-modal.component';

describe('ClientProfileMediaModalComponent', () => {
  let component: ClientProfileMediaModalComponent;
  let fixture: ComponentFixture<ClientProfileMediaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientProfileMediaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientProfileMediaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
