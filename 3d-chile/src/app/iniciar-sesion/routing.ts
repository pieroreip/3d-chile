import { NgModule} from "@angular/core";

import {Routes, RouterModule} from '@angular/router'

import { IniciarSesionPage } from "./iniciar-sesion";

const rutas: Routes=[
    {
        path:'',
        component: IniciarSesionPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports:[RouterModule],
})
export class IniciarSesionPageRouting {}