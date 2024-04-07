import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNewsListComponent } from './blog-news-list.component';

describe('BlogNewsListComponent', () => {
  let component: BlogNewsListComponent;
  let fixture: ComponentFixture<BlogNewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogNewsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
