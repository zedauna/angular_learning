import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Monster } from '../../models/monster.model.js';
import { MonsterService } from '../../services/monster/monster.js';
import { PlayingCard } from '../../components/playing-card/playing-card.js';
import { PlayingCardTwo } from '../../components/playing-card-two/playing-card-two.js';

@Component({
  selector: 'app-monster-toggle',
  standalone:true,
  imports: [PlayingCard,PlayingCardTwo],
  templateUrl: './monster-toggle.html',
  styleUrl: './monster-toggle.css'
})
export class MonsterToggle {
  monsterService = inject(MonsterService);
  router = inject(Router);

  /**
   * TODO une premiere approche 
   */
  monsters!: Monster[];
  selectedMonsterIndex = 0;

  ToggleMonster() {
    this.selectedMonsterIndex =
      (this.selectedMonsterIndex + 1) % this.monsters.length;
  }

  /**
   * TODO deuxieme approche avec Signal et computed
   */
  monstersTwo = signal<Monster[]>([]);
  selectedMonsterIndexTwo = signal(0);

  selectedMonster = computed(() => {
    return this.monstersTwo()[this.selectedMonsterIndexTwo()];
  });

  ToggleMonsterTwo() {
    this.selectedMonsterIndexTwo.set(
      (this.selectedMonsterIndexTwo() + 1) % this.monsters.length
    );
  }

  constructor() {
    // effect(() => {
    //   console.log(this.selectedMonster());
    // });
    this.monsters=this.monsterService.getAll();
    this.monstersTwo.set(this.monsterService.getAll());
  }
}
