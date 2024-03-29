import { TestBed } from '@angular/core/testing';

import { AdminBlogPostService } from './admin-blog-post.service';

describe('AdminBlogPostService', () => {
  let service: AdminBlogPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBlogPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
