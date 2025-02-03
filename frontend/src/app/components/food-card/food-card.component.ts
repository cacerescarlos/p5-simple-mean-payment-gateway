import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
  standalone: false
})
export class FoodCardComponent   {

  @Input() item!: Food;
  @Output() addToCartEvent = new EventEmitter<any>(); // ✅ Output para emitir el evento

   addToCart(item: any): void {
    this.addToCartEvent.emit(item);

  }

}
