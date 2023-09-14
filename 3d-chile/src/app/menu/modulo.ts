import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { IonicModule } from '@ionic/angular';

import {MenuPageRouting } from "./routing";

import { MenuPage } from "./menu";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      MenuPageRouting
    ],
    declarations: [MenuPage]
  })
  export class MenuPageModule {}
  