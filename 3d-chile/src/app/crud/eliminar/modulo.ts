import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { IonicModule } from '@ionic/angular';

import {EliminarPageRouting } from "./routing";

import { EliminarPage } from "./eliminar";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      EliminarPageRouting],
    declarations: [EliminarPage]
  })
  export class EliminarPageModule {}
  