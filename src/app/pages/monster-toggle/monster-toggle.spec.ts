import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterToggle } from './monster-toggle';

describe('MonsterToggle', () => {
  let component: MonsterToggle;
  let fixture: ComponentFixture<MonsterToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterToggle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
