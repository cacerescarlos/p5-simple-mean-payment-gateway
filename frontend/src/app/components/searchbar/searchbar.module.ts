import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchbarComponent } from './searchbar.component';

@NgModule({
  declarations: [ SearchbarComponent ],
  imports: [CommonModule, IonicModule],
  exports: [SearchbarComponent],
})
export class SearchBarModule {}
