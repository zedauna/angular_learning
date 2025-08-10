import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterTwo } from './monster-two';

describe('MonsterTwo', () => {
  let component: MonsterTwo;
  let fixture: ComponentFixture<MonsterTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
