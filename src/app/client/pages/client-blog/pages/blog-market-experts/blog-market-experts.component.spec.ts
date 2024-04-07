import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMarketExpertsComponent } from './blog-market-experts.component';

describe('BlogMarketExpertsComponent', () => {
  let component: BlogMarketExpertsComponent;
  let fixture: ComponentFixture<BlogMarketExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogMarketExpertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogMarketExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
