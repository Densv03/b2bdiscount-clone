import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bBreadcrumbsComponent } from '@b2b/breadcrumbs';

describe('B2bBreadcrumbsComponent', () => {
  let component: B2bBreadcrumbsComponent;
  let fixture: ComponentFixture<B2bBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2bBreadcrumbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B2bBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
