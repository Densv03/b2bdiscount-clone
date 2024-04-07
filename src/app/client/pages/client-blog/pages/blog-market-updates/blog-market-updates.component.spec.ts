import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMarketUpdatesComponent } from './blog-market-updates.component';

describe('BlogMarketUpdatesComponent', () => {
  let component: BlogMarketUpdatesComponent;
  let fixture: ComponentFixture<BlogMarketUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogMarketUpdatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogMarketUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
