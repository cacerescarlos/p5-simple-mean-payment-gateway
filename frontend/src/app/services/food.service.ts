import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({providedIn: 'root'})
export class FoodService {
    constructor() { }
    getFoods(): Food[] {
        return [
          {
            id: 1,
            title: 'Mariscos',
            price: 12,
            image: 'assets/images/foods/seafood-dishes.png',
            description:
              'Además de los mariscos más frescos, hay maíz, cilantro y tomates, una combinación perfecta.',
          },
          {
            id: 2,
            title: 'Hamburguesa',
            price: 21,
            image: 'assets/images/foods/hamburger.png',
            description:
              'Una hamburguesa jugosa con ingredientes frescos y un pan crujiente.',
          },
          {
            id: 3,
            title: 'Mejillones',
            price: 16,
            image: 'assets/images/foods/mussel.jpg',
            description:
              'Deliciosos mejillones cocinados con hierbas y especias especiales.',
          },
          {
            id: 4,
            title: 'Pizza',
            price: 20,
            image: 'assets/images/foods/pizza.webp',
            description:
              'Pizza horneada a la perfección con una base crujiente y queso derretido.',
          },
          {
            id: 5,
            title: 'Desayuno',
            price: 10,
            image: 'assets/images/foods/scott-ish-breakfast.png',
            description:
              'Un desayuno energético con huevos, tostadas, tocino y más.',
          },
          {
            id: 6,
            title: 'Tambi',
            price: 13,
            image: 'assets/images/foods/tambi.webp',
            description:
              'Un platillo especial con sabores únicos y una mezcla de ingredientes frescos.',
          },
        ];
      }

      getFood(id: number): Food| undefined{
        return this.getFoods().find((food)=> food.id === id);
      }
      
}