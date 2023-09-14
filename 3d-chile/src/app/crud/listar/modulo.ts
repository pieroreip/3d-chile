import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { IonicModule } from '@ionic/angular';

import {ListarPageRouting } from "./routing";

import { ListarPage } from "./listar";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ListarPageRouting],
    declarations: [ListarPage]
  })
  export class ListarPageModule {}
  