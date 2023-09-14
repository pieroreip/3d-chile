import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { IonicModule } from '@ionic/angular';

import {AgregarPageRouting } from "./routing";

import { AgregarPage } from "./agregar";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      AgregarPageRouting],
    declarations: [AgregarPage]
  })
  export class AgregarPageModule {}
  