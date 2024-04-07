import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHeaderMenuComponent } from './blog-header-menu.component';

describe('BlogHeaderMenuComponent', () => {
  let component: BlogHeaderMenuComponent;
  let fixture: ComponentFixture<BlogHeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogHeaderMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
