import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderdetailsPageRoutingModule } from './orderdetails-routing.module';

import { OrderdetailsPage } from './orderdetails.page';
import { MovilService } from '../services/movil.service';
import { DataService1 } from '../services/data.service';
import { UtilityService } from '../shared/utility.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderdetailsPageRoutingModule
  ],
  declarations: [OrderdetailsPage],
  providers:[ DataService1,MovilService,UtilityService]
})
export class OrderdetailsPageModule {}
