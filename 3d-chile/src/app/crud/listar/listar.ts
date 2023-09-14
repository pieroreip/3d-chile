import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
    selector: 'app-listar',
    templateUrl: './listar.html',
    styleUrls:['./listar.scss']
})
export class ListarPage implements OnInit{
    constructor(public navCtrl:NavController){

    }
    ngOnInit() {}

    volver(){
        this.navCtrl.back()
    }
}
