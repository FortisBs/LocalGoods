import { Component } from '@angular/core';
import { Categories, categories } from 'src/app/shared/types/types';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent {

  categories: Categories[] = categories

}
