import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MonsterType } from '../../utils/monster.utils.js';

@Component({
  selector: 'app-monster-three',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './monster-three.html',
  styleUrl: './monster-three.css',
})
export class MonsterThree implements OnInit, OnDestroy{
  private route = inject(ActivatedRoute);
  private routeSubscription: Subscription | null = null;

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    type: new FormControl(MonsterType.ELECTRIC, [Validators.required]),
    hp: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(200),
    ]),
    figureCaption: new FormControl('', [Validators.required]),
    attackName: new FormControl('', [Validators.required]),
    attackStrength: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(200),
    ]),
    attackDescription: new FormControl('', [Validators.required]),
  });

  monsterTypes = Object.values(MonsterType);
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
    console.log(this.formGroup.value);
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
