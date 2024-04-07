import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticlesSectionComponent } from './news-articles-section.component';

describe('NewsArticlesComponent', () => {
  let component: NewsArticlesSectionComponent;
  let fixture: ComponentFixture<NewsArticlesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsArticlesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsArticlesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
