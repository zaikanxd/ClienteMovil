import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoPagoPageRoutingModule } from './nuevo-pago-routing.module';

import { NuevoPagoPage } from './nuevo-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NuevoPagoPageRoutingModule
  ],
  declarations: [NuevoPagoPage]
})
export class NuevoPagoPageModule {}
