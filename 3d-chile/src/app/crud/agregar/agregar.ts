import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.html',
    styleUrls:['./agregar.scss']
})
export class AgregarPage implements OnInit{
    constructor(public navCtrl:NavController){

    }
    ngOnInit() {}

    volver(){
        this.navCtrl.back()
    }
}
