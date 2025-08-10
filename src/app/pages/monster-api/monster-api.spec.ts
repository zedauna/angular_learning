import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterApi } from './monster-api';

describe('MonsterApi', () => {
  let component: MonsterApi;
  let fixture: ComponentFixture<MonsterApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
