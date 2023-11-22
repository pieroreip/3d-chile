import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Producto } from 'src/app/modelo/producto';
@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.page.html',
  styleUrls: ['./colecciones.page.scss'],
})
export class ColeccionesPage implements OnInit {

  constructor(public navCtrl:NavController, private database:FirestoreService) { }

  //variables declaradas
  destacados:Producto[]=[]

  //Inicio de la pagina
  ngOnInit() {
    this.obtenerColeccion();
  }

  //metodos personalizados
  volver(){
    this.navCtrl.back();
  }

  obtenerColeccion(){
    this.database.obtenerColeccion<Producto>('Destacados').subscribe(prod=>{
      //console.log(prod);
      this.destacados=prod;
    })
  }

}
