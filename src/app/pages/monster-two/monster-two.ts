import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-monster-two',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './monster-two.html',
  styleUrl: './monster-two.css',
})
export class MonsterTwo implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private routeSubscription: Subscription | null = null;

  name = new FormControl('',[Validators.required]);
  hp = new FormControl(0, [Validators.required, Validators.min(1), Validators.max(200)]);
  monsterId = -1;

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params) => {
      if (params['id']) {
        this.monsterId = parseInt(params['id']);
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  submit(event: Event) {
    event.preventDefault();
    console.log(this.name.value);
    console.log(this.hp.value);
  }

  setChanged(){
    this.name.setValue('Changed');
  }

}
