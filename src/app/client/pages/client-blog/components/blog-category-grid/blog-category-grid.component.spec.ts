import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCategoryGridComponent } from './blog-category-grid.component';

describe('BlogCategoryGridComponent', () => {
  let component: BlogCategoryGridComponent;
  let fixture: ComponentFixture<BlogCategoryGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCategoryGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogCategoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
