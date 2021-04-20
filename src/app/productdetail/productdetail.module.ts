import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductdetailPageRoutingModule } from './productdetail-routing.module';

import { ProductdetailPage } from './productdetail.page';
import { RatingModule } from 'ng-starrating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingModule,
    ProductdetailPageRoutingModule
  ],
  declarations: [ProductdetailPage]
})
export class ProductdetailPageModule {}
