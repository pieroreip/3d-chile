import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-coleccion',
  templateUrl: './agregar-coleccion.page.html',
  styleUrls: ['./agregar-coleccion.page.scss'],
})
export class AgregarColeccionPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  volver(){
    this.navCtrl.back();
  }
}
