import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsArticleComponent } from './blog-details-article.component';

describe('BlogDetailsArticleComponent', () => {
  let component: BlogDetailsArticleComponent;
  let fixture: ComponentFixture<BlogDetailsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailsArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogDetailsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
