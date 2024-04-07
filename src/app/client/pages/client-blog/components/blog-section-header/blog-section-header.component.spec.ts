import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSectionHeaderComponent } from './blog-section-header.component';

describe('BlogSectionHeaderComponent', () => {
  let component: BlogSectionHeaderComponent;
  let fixture: ComponentFixture<BlogSectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSectionHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
