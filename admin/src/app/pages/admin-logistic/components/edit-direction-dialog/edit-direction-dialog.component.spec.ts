import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDirectionDialogComponent } from './edit-direction-dialog.component';

describe('EditDirectionDialogComponent', () => {
  let component: EditDirectionDialogComponent;
  let fixture: ComponentFixture<EditDirectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDirectionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDirectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
