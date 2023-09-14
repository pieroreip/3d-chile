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

    volver(){
        this.navCtrl.back()
      }
}
