import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { IonicModule } from '@ionic/angular';

import { IniciarSesionPageRouting } from "./routing";

import { IniciarSesionPage } from "./iniciar-sesion";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      IniciarSesionPageRouting
    ],
    declarations: [IniciarSesionPage]
  })
  export class IniciarSesionPageModule {}
  