import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingPageRoutingModule } from './listing-routing.module';

import { ListingPage } from './listing.page';
import { SearchBarModule } from 'src/app/components/searchbar/searchbar.module';
import { CategoryModule } from 'src/app/components/category-item/category-item.module';
import { FoodCardModule } from 'src/app/components/food-card/food-card.module';
import { FoodService } from 'src/app/services/food.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingPageRoutingModule,
    SearchBarModule,
    CategoryModule,
    FoodCardModule
  ],
  declarations: [ListingPage],
  providers:[FoodService]
})
export class ListingPageModule {}
