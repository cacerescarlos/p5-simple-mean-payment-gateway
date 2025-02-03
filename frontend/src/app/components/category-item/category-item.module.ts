import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CategoryItemComponent } from './category-item.component';

@NgModule({
  declarations: [ CategoryItemComponent ],
  imports: [CommonModule, IonicModule],
  exports: [CategoryItemComponent],
})
export class CategoryModule {}
