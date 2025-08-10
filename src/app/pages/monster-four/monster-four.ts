import { MonsterService } from './../../services/monster/monster';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MonsterType } from '../../utils/monster.utils.js';
import { PlayingCard } from '../../components/playing-card/playing-card.js';
import { Monster } from '../../models/monster.model.js';

@Component({
  selector: 'app-monster-four',
  standalone:true,
  imports: [ReactiveFormsModule, PlayingCard],
  templateUrl: './monster-four.html',
  styleUrl: './monster-four.css',
})
export class MonsterFour implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private monsterService=inject(MonsterService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private routeSubscription: Subscription | null = null;
  private formValuesSubscription: Subscription | null = null;

  formGroup = this.fb.group({
    name: ['', [Validators.required]],
    image: ['', [Validators.required]],
    type: [MonsterType.ELECTRIC, [Validators.required]],
    hp: [0, [Validators.required, Validators.min(1), Validators.max(200)]],
    figureCaption: ['', [Validators.required]],
    attackName: ['', [Validators.required]],
    attackStrength: [
      0,
      [Validators.required, Validators.min(1), Validators.max(200)],
    ],
    attackDescription: ['', [Validators.required]],
  });

  monster: Monster = Object.assign(new Monster(), this.formGroup.value);
  monsterTypes = Object.values(MonsterType);
  monsterId = -1;

  ngOnInit(): void {
    this.formValuesSubscription = this.formGroup.valueChanges.subscribe(
      (data) => {
        this.monster = Object.assign(new Monster(), data);
      }
    );
  
    this.routeSubscription = this.route.params.subscribe((params) => {
      if (params['monster']) {
        this.monsterId = parseInt(params['monster']);
        const monsterFound=this.monsterService.get(this.monsterId);
        if (monsterFound){
          this.monster=monsterFound;
          this.formGroup.patchValue(this.monster);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.formValuesSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
  }

  navigateBack() {
    this.router.navigate(['/home']);
  }

  submit(event: Event) {
    event.preventDefault();
    console.log(this.formGroup.value);
    if (this.monsterId === -1) {
      this.monsterService.add(this.monster);
    } else {
      this.monster.id = this.monsterId;
      this.monsterService.update(this.monster);
    }
    this.navigateBack()
  }

  isFieldValid(fieldName: string) {
    const formControl = this.formGroup.get(fieldName);
    return formControl?.invalid && (formControl?.dirty || formControl?.touched);
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          image: reader.result as string,
        });
      };
    }
  }
  
}
