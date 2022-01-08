import { TestBed } from '@angular/core/testing';

import { PhotosGuard } from './photos.guard';

describe('PhotosGuard', () => {
  let guard: PhotosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PhotosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
