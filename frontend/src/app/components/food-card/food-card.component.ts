import { Component, Input, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
  standalone: false
})
export class FoodCardComponent   {

  @Input() item!: Food;

}
