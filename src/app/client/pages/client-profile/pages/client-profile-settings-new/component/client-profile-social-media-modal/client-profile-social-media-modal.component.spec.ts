import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileSocialMediaModalComponent } from './client-profile-social-media-modal.component';

describe('ClientProfileSocialMediaModalComponent', () => {
  let component: ClientProfileSocialMediaModalComponent;
  let fixture: ComponentFixture<ClientProfileSocialMediaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientProfileSocialMediaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientProfileSocialMediaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
