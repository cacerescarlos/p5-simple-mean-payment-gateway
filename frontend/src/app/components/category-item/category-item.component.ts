import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
  standalone: false
})
export class CategoryItemComponent  implements OnInit {

  @Input() item!: Category;

  constructor() { }

  ngOnInit() {}

}
