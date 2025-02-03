import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
  standalone: false,
})
export class ListingPage implements OnInit {

  categories: Category[] = [];
  foods: Food[] = [];
  cart: any[] = []; // Almacena los productos en el carrito


  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getCategories();
    this.foods = this.foodService.getFoods();
  }

   // Agregar productos al carrito
   addToCart(product: any): void {
    const existingItem = this.cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(this.cart)); // Guardar el carrito
    console.log(this.cart);
    
  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'Todos',
        image: 'assets/images/icons/all.png',
        active: true,
      },
      {
        id: 2,
        label: 'Burgers',
        image: 'assets/images/icons/burger.png',
        active: false,
      },
      {
        id: 3,
        label: 'Platos',
        image: 'assets/images/icons/dish.png',
        active: false,
      },
      {
        id: 4,
        label: 'Sushi',
        image: 'assets/images/icons/sushi.png',
        active: false,
      },
    ];
  }
  
}
