import { NgModule} from "@angular/core";

import {Routes, RouterModule} from '@angular/router'

import { ModificarPage } from "./modificar";

const rutas: Routes=[
    {
        path:'',
        component: ModificarPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports:[RouterModule],
})
export class ModificarPageRouting {}