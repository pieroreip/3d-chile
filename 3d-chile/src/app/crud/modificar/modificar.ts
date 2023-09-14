import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
    selector: 'app-modificar',
    templateUrl: './modificar.html',
    styleUrls:['./modificar.scss']
})
export class ModificarPage implements OnInit{
    constructor(public navCtrl:NavController){

    }
    ngOnInit() {}

    volver(){
        this.navCtrl.back()
    }
}
