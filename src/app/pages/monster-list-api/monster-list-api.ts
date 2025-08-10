import { SearchBar } from './../../components/search-bar/search-bar';
import { Component, computed, inject, model } from '@angular/core';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MonsterApiRestService } from '../../services/monster/monster-api-rest.js';
import { Monster } from '../../models/monsterapi.models.js';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PlayingCardBoucle } from '../../components/playing-card-boucle/playing-card-boucle.js';

@Component({
  selector: 'app-monster-list-api',
  standalone:true,
  imports: [
    CommonModule,
    PlayingCardBoucle,
    SearchBar,
    MatButtonModule,
  ],
  templateUrl: './monster-list-api.html',
  styleUrl: './monster-list-api.css',
})
export class MonsterListApi {
  private monsterServiceAPI = inject(MonsterApiRestService);
  private router = inject(Router);

  monstersAPI = toSignal(this.monsterServiceAPI.getAll());
  searchAPI = model('');

  filteredMonstersAPI = computed(() => {
    return (
      this.monstersAPI()?.filter((monster) =>
        monster.name.includes(this.searchAPI())
      ) ?? []
    );
  });

  addMonsterAPI() {
    this.router.navigate(['monsterApi']);
  }

  openMonsterAPI(monster: Monster) {
    this.router.navigate(['monsterApi', monster.id]);
  }

  CreateMonsterAPI(){

  }
}
