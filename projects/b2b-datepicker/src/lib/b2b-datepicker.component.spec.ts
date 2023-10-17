import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bDatepickerComponent } from './b2b-datepicker.component';

describe('B2bDatepickerComponent', () => {
  let component: B2bDatepickerComponent;
  let fixture: ComponentFixture<B2bDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2bDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B2bDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
