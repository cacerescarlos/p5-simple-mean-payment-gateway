import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false
})
export class CartPage implements OnInit {

  cart: any[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    // Cargar el carrito desde localStorage
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }

  clear(){
    localStorage.clear();
  }
  // Redirigir al cliente a Stripe Checkout
  checkout(): void {
    console.log(this.cart);
  
    let data = {
      items: this.cart.map(it=>{
        return {
          name: it.title,
          price: it.price,
          quantity: it.quantity 
        }
      }),
      currency:'usd'
    };

    
    this.foodService.createCheckoutSession(data).subscribe((data) => {
      window.location.href = data.url; // Redirige a Stripe Checkout
      localStorage.clear();
    });
  }
}
