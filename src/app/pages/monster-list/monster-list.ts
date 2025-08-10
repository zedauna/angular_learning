import { Component, computed, inject, model, signal } from '@angular/core';
import { PlayingCard } from '../../components/playing-card/playing-card.js';
import { PlayingCardTwo } from '../../components/playing-card-two/playing-card-two.js';
import { SearchBar } from '../../components/search-bar/search-bar.js';
import { SearchBarTwo } from '../../components/search-bar-two/search-bar-two.js';
import { PlayingCardBoucle } from '../../components/playing-card-boucle/playing-card-boucle.js';
import { CommonModule } from '@angular/common';
import { MonsterService } from '../../services/monster/monster.js';
import { Monster } from '../../models/monster.model.js';
import { Router } from '@angular/router';
import { MonsterToggle } from '../monster-toggle/monster-toggle.js';

@Component({
  selector: 'app-monster-list',
  standalone:true,
  imports: [
    PlayingCard,
    PlayingCardTwo,
    PlayingCardBoucle,
    SearchBar,
    SearchBarTwo,
    CommonModule,
    MonsterToggle
  ],
  templateUrl: './monster-list.html',
  styleUrl: './monster-list.css',
})
export class MonsterList {
  monsterService = inject(MonsterService);
  router = inject(Router);
  monsters = signal<Monster[]>([]);
  count: number = 0;
  search: string = '';

  searchTwo = model('');
  filteredMonsters = computed(() => {
    return this.monsters().filter((monster) =>
      monster.name.includes(this.searchTwo())
    );
  });

  increaseCount() {
    this.count++;
  }

  selectedMonsterIndex = 0;
  ToggleMonster() {
    this.selectedMonsterIndex =
      (this.selectedMonsterIndex + 1) % this.monsters.length;
  }

  selectedMonsterIndexTwo = signal(0);
  selectedMonster = computed(() => {
    return this.monsters()[this.selectedMonsterIndexTwo()];
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

    this.monsters.set(this.monsterService.getAll());
  }

  addGenericMonster() {
    const monster = new Monster();
    this.monsterService.add(monster);
    this.monsters.set(this.monsterService.getAll());
  }

  CreateMonster() {
    this.router.navigate(['monsterFour']);
  }

  CreateMonsterMaterial() {
    this.router.navigate(['monsterMaterial']);
  }

  openMonster(monster: Monster) {
    this.router.navigate(['monsterFour', monster.id]);
  }

  openMonsterMaterial(monster: Monster) {
    this.router.navigate(['monsterMaterial', monster.id]);
  }
}
