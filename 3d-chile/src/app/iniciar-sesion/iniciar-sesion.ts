import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
    selector: 'app-iniciar-sesion',
    templateUrl: './iniciar-sesion.html',
    styleUrls:['./iniciar-sesion.scss']
})
export class IniciarSesionPage implements OnInit{
    constructor(public navCtrl:NavController){

    }
    ngOnInit() {}

    volver(){
        this.navCtrl.back()
    }
}
