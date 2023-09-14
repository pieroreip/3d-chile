import { NgModule} from "@angular/core";

import {Routes, RouterModule} from '@angular/router'

import { MenuPage } from "./menu";

const rutas: Routes=[
    {
        path:'',
        component: MenuPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports:[RouterModule],
})
export class MenuPageRouting {}