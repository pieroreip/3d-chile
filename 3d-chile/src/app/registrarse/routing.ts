import { NgModule} from "@angular/core";

import {Routes, RouterModule} from '@angular/router'

import { RegistrarsePage } from "./registrarse";

const rutas: Routes=[
    {
        path:'',
        component: RegistrarsePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports:[RouterModule],
})
export class RegistrarsePageRouting {}