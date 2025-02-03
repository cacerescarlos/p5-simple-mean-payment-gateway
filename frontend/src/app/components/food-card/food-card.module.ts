import { NgModule } from '@angular/core';

import { FoodCardComponent } from './food-card.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [CommonModule, IonicModule],
    exports: [FoodCardComponent],
    declarations: [FoodCardComponent],
    providers: [],
})
export class FoodCardModule { }
