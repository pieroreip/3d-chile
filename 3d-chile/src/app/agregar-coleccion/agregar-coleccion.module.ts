import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarColeccionPageRoutingModule } from './agregar-coleccion-routing.module';

import { AgregarColeccionPage } from './agregar-coleccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarColeccionPageRoutingModule
  ],
  declarations: [AgregarColeccionPage]
})
export class AgregarColeccionPageModule {}
