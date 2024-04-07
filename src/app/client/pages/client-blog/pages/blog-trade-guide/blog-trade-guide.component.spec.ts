import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTradeGuideComponent } from './blog-trade-guide.component';

describe('BlogTradeGuideComponent', () => {
  let component: BlogTradeGuideComponent;
  let fixture: ComponentFixture<BlogTradeGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTradeGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogTradeGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
