import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileMobileToolbarComponent } from './client-profile-mobile-toolbar.component';

describe('ClientProfileMobileToolbarComponent', () => {
  let component: ClientProfileMobileToolbarComponent;
  let fixture: ComponentFixture<ClientProfileMobileToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientProfileMobileToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientProfileMobileToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
