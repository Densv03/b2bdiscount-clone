import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyPublishedArticlesComponent } from './recently-published-articles.component';

describe('RecentlyPublishedArticlesComponent', () => {
  let component: RecentlyPublishedArticlesComponent;
  let fixture: ComponentFixture<RecentlyPublishedArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentlyPublishedArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentlyPublishedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
