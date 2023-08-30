import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridListComponent } from './blog-grid-list.component';

describe('BlogGridListComponent', () => {
  let component: BlogGridListComponent;
  let fixture: ComponentFixture<BlogGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGridListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
