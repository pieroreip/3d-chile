import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { IonicModule } from '@ionic/angular';

import {ModificarPageRouting } from "./routing";

import { ModificarPage } from "./modificar";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ModificarPageRouting],
    declarations: [ModificarPage]
  })
  export class ModificarPageModule {}
  