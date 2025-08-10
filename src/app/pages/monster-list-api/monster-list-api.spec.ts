import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterListApi } from './monster-list-api';

describe('MonsterListApi', () => {
  let component: MonsterListApi;
  let fixture: ComponentFixture<MonsterListApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterListApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterListApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
