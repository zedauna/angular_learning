import { TestBed } from '@angular/core/testing';

import { MonsterApiRest } from './monster-api-rest';

describe('MonsterApiRest', () => {
  let service: MonsterApiRest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterApiRest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
