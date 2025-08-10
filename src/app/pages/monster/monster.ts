import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayingCard } from '../../components/playing-card/playing-card.js';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-monster',
  standalone:true,
  imports: [PlayingCard],
  templateUrl: './monster.html',
  styleUrl: './monster.css',
})
export class Monster implements OnInit,OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  monsterId = signal<number | undefined>(undefined);
  routeSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
			this.monsterId.set(params['id'] ? parseInt(params['id']) : undefined);
		});
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  next() {
    let nextId = this.monsterId() || 0;
    nextId++;
    // console.log(nextId);
    this.router.navigate(['/monster/' + nextId]);
  }
}
