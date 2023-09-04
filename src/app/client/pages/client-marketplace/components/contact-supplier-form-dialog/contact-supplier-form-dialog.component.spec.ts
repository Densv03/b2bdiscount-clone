import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSupplierFormDialogComponent } from './contact-supplier-form-dialog.component';

describe('ContactSupplierFormDialogComponent', () => {
  let component: ContactSupplierFormDialogComponent;
  let fixture: ComponentFixture<ContactSupplierFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSupplierFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSupplierFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
