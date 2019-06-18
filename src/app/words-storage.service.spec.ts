import { TestBed } from '@angular/core/testing';

import { WordsStorageService } from './words-storage.service';

describe('WordsStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordsStorageService = TestBed.get(WordsStorageService);
    expect(service).toBeTruthy();
  });
});
