import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColeccionesPageRoutingModule } from './colecciones-routing.module';

import { ColeccionesPage } from './colecciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColeccionesPageRoutingModule
  ],
  declarations: [ColeccionesPage]
})
export class ColeccionesPageModule {}
