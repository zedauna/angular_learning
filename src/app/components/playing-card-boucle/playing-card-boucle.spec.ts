import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingCardBoucle } from './playing-card-boucle';

describe('PlayingCardBoucle', () => {
  let component: PlayingCardBoucle;
  let fixture: ComponentFixture<PlayingCardBoucle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayingCardBoucle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayingCardBoucle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
