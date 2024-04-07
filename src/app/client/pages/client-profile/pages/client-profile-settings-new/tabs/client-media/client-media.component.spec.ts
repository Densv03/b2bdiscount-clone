import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMediaComponent } from './client-media.component';

describe('ClientMediaComponent', () => {
  let component: ClientMediaComponent;
  let fixture: ComponentFixture<ClientMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientMediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
