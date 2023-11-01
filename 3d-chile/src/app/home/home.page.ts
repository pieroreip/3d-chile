import { Component,OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Producto } from '../modelo/producto';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  productos:Producto[]=[];

  constructor(private database:FirestoreService) {}
  
  ngOnInit(){
    this.getProductos();
  }
  
  getProductos(){
this.database.obtenerColeccion<Producto>('Productos').subscribe((res)=>{
  this.productos=res;
})
  }
}
