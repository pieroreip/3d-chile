import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarColeccionPage } from './agregar-coleccion.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarColeccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarColeccionPageRoutingModule {}
