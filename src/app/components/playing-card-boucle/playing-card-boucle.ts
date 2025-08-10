import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster.model.js';
import { MonsterTypeProperties } from '../../utils/monster.utils.js';

@Component({
  selector: 'app-playing-card-boucle',
  standalone:true,
  imports: [],
  templateUrl: './playing-card-boucle.html',
  styleUrl: './playing-card-boucle.css'
})
export class PlayingCardBoucle implements OnChanges {

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
