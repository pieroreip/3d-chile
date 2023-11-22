import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColeccionesPage } from './colecciones.page';

const routes: Routes = [
  {
    path: '',
    component: ColeccionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColeccionesPageRoutingModule {}
