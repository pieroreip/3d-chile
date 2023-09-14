import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
    selector: 'app-registrarse',
    templateUrl: './registrarse.html',
    styleUrls:['./registrarse.scss']
})
export class RegistrarsePage implements OnInit{
    constructor(public navCtrl:NavController){

    }
    ngOnInit() {}

    volver(){
        this.navCtrl.back()
    }
}
