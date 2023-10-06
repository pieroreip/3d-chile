import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
    selector: 'app-listar',
    templateUrl: './listar.html',
    styleUrls:['./listar.scss']
})
export class ListarPage implements OnInit{
    constructor(public navCtrl:NavController, private afs : FirestoreService){

    }
    ngOnInit() {}

    volver(){
        this.navCtrl.back()
    }
    obtenerProductos(){
        this.afs.getCollection()
    }
}
