import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {
  
  data:Producto={
    nombre:'',
    descripcion:'',
    precio:0,
    id:''
  }

  productos:Producto[]=[];

  constructor(private database: FirestoreService) {}

  ngOnInit() {
    this.getProductos();
  }
  crearDocumento(){
    console.log(this.data)
    /*
    const producto:Producto={
      nombre:'Among us',
      descripcion:'Sus producto',
      precio:15000
    }
    */
    const id=this.database.crearID();

    this.data.id=id;

    this.database.crearDocumento(this.data,'Productos',id);
    console.log('ola se guardo')
  }

  getProductos(){
    this.database.obtenerColeccion<Producto>('Productos').subscribe(prod=>{
      console.log(prod);
      this.productos=prod;
    })
  }
}
