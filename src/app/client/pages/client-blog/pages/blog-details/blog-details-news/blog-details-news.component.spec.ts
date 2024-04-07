import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsNewsComponent } from './blog-details-news.component';

describe('BlogDetailsNewsComponent', () => {
  let component: BlogDetailsNewsComponent;
  let fixture: ComponentFixture<BlogDetailsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailsNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogDetailsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
