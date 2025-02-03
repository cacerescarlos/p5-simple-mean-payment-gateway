import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class FoodService {
  private backendUrl = 'http://localhost:3000/api'; // URL del backend

    constructor(private http: HttpClient) { }

    getFood(id: number): Food| undefined{
      return this.getFoods().find((food)=> food.id === id);
    }
 
     // Crear una sesión de pago
  createCheckoutSession(items: any): Observable<any> {
    console.log(items);
    
    return this.http.post(`${this.backendUrl}/payments/create-checkout-session`, items );
  }

    getFoods(): Food[] {
        return [

          {
            id: 4,
            title: 'Pizza',
            price: 200,
            image: 'assets/images/foods/pizza.webp',
            description:
              'Pizza horneada a la perfección con una base crujiente y queso derretido.',
          },
          {
            id: 1,
            title: 'Mariscos',
            price: 120,
            image: 'assets/images/foods/marisco4.png',
            description:
              'Además de los mariscos más frescos, hay maíz, cilantro y tomates, una combinación perfecta.',
          },
          {
            id: 2,
            title: 'Hamburguesa',
            price: 210,
            image: 'assets/images/foods/hamburger.png',
            description:
              'Una hamburguesa jugosa con ingredientes frescos y un pan crujiente.',
          },
          {
            id: 6,
            title: 'Tambi',
            price: 130,
            image: 'assets/images/foods/tambi.webp',
            description:
              'Un platillo especial con sabores únicos y una mezcla de ingredientes frescos.',
          },
          {
            id: 3,
            title: 'Mejillones',
            price: 160,
            image: 'assets/images/foods/mussel.jpg',
            description:
              'Deliciosos mejillones cocinados con hierbas y especias especiales.',
          },
          
          {
            id: 5,
            title: 'Desayuno',
            price: 100,
            image: 'assets/images/foods/scott-ish-breakfast.png',
            description:
              'Un desayuno energético con huevos, tostadas, tocino y más.',
          },
          
        ];
      }

      
}