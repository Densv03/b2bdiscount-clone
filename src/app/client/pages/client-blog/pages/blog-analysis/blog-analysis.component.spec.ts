import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAnalysisComponent } from './blog-analysis.component';

describe('BlogAnalysisComponent', () => {
  let component: BlogAnalysisComponent;
  let fixture: ComponentFixture<BlogAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
