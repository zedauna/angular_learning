import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingCardTwo } from './playing-card-two';

describe('PlayingCardTwo', () => {
  let component: PlayingCardTwo;
  let fixture: ComponentFixture<PlayingCardTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayingCardTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayingCardTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
