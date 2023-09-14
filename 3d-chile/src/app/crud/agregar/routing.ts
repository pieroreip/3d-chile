import { NgModule} from "@angular/core";

import {Routes, RouterModule} from '@angular/router'

import { AgregarPage } from "./agregar";

const rutas: Routes=[
    {
        path:'',
        component: AgregarPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports:[RouterModule],
})
export class AgregarPageRouting {}