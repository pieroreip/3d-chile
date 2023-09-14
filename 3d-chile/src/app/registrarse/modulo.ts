import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { IonicModule } from '@ionic/angular';

import {RegistrarsePageRouting } from "./routing";

import { RegistrarsePage } from "./registrarse";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RegistrarsePageRouting
    ],
    declarations: [RegistrarsePage]
  })
  export class RegistrarsePageModule {}
  