import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Producto } from 'src/app/modelo/producto';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
    selector: 'app-listar',
    templateUrl: './listar.html',
    styleUrls:['./listar.scss']
})
export class ListarPage implements OnInit{
    constructor(public navCtrl:NavController, private database : FirestoreService){

    }
    productos:Producto[]=[];
    ngOnInit() {
        this.getProductos();
    }

    volver(){
        this.navCtrl.back()
    }
    getProductos(){
        this.database.obtenerColeccion<Producto>('Productos').subscribe(prod=>{
          console.log(prod);
          this.productos=prod;
        })
      }

      eliminarProducto(prod:Producto){
        this.database.eliminarProd(prod.id);
      }
}
