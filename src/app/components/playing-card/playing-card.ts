import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster.model.js';
import { CommonModule } from '@angular/common';
import { MonsterTypeProperties } from '../../utils/monster.utils.js';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css',
})
export class PlayingCard implements OnChanges {

  @Input() monster: Monster = new Monster();
  
  monsterTypeIcon: string = './assets/img/electric.png';
  backgroundColor: string = 'rgba(255, 255, 104)';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['monster']) {
      if (
        changes['monster'].previousValue?.type !=
        changes['monster'].currentValue.type
      ) {
        this.monsterTypeIcon =
          MonsterTypeProperties[this.monster.type].imageUrl;
        this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
      }
    }
  }
}
