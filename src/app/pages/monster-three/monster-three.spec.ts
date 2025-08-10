import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterThree } from './monster-three';

describe('MonsterThree', () => {
  let component: MonsterThree;
  let fixture: ComponentFixture<MonsterThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
