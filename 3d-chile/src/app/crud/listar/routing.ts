import { NgModule} from "@angular/core";

import {Routes, RouterModule} from '@angular/router'

import { ListarPage } from "./listar";

const rutas: Routes=[
    {
        path:'',
        component: ListarPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports:[RouterModule],
})
export class ListarPageRouting {}