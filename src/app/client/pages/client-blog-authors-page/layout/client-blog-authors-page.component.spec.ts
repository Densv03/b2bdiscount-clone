import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBlogAuthorsPageComponent } from './client-blog-authors-page.component';

describe('ClientBlogAuthorsPageComponent', () => {
  let component: ClientBlogAuthorsPageComponent;
  let fixture: ComponentFixture<ClientBlogAuthorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientBlogAuthorsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientBlogAuthorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
