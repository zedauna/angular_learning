import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterFour } from './monster-four';

describe('MonsterFour', () => {
  let component: MonsterFour;
  let fixture: ComponentFixture<MonsterFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
