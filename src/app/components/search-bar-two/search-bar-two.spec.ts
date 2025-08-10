import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarTwo } from './search-bar-two';

describe('SearchBarTwo', () => {
  let component: SearchBarTwo;
  let fixture: ComponentFixture<SearchBarTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
