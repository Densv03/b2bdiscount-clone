import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMenuMobileDialogComponent } from './blog-menu-mobile-dialog.component';

describe('BlogMenuMobileComponent', () => {
  let component: BlogMenuMobileDialogComponent;
  let fixture: ComponentFixture<BlogMenuMobileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogMenuMobileDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogMenuMobileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
