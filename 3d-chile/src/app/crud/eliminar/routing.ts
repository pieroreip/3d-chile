import { NgModule} from "@angular/core";

import {Routes, RouterModule} from '@angular/router'

import { EliminarPage } from "./eliminar";

const rutas: Routes=[
    {
        path:'',
        component: EliminarPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports:[RouterModule],
})
export class EliminarPageRouting {}