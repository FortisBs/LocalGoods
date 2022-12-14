import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

import { GridModule } from 'src/app/shared/components/grid/grid.module';
import { SearchModule } from "../../shared/components/search/search.module";
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProductsComponent }]),
    GridModule,
    SearchModule,
    PipesModule
  ]
})
export class ProductsModule { }
