import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterMaterial } from './monster-material';

describe('MonsterMaterial', () => {
  let component: MonsterMaterial;
  let fixture: ComponentFixture<MonsterMaterial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterMaterial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterMaterial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
