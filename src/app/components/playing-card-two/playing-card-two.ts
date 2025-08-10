import { Component, computed, input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster.model.js';
import { CommonModule } from '@angular/common';
import { MonsterTypeProperties } from '../../utils/monster.utils.js';

@Component({
  selector: 'app-playing-card-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playing-card-two.html',
  styleUrl: './playing-card-two.css',
})
export class PlayingCardTwo {

  monster: InputSignal<Monster> = input(new Monster());
  
  monsterTypeIcon = computed(() => {
    return MonsterTypeProperties[this.monster().type].imageUrl;
  });
  backgroundColor = computed(() => {
    return MonsterTypeProperties[this.monster().type].color;
  });
}
