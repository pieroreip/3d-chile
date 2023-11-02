import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.html',
    styleUrls:['./menu.scss']
})
export class MenuPage implements OnInit{
    constructor(public navCtrl:NavController){

    }
    ngOnInit() {}

    //funcion para volver a la pagina anterior
    volver(){
        this.navCtrl.back()
      }
}
