import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Producto } from 'src/app/modelo/producto';
import { FirestoreService } from 'src/app/services/firestore.service';


@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.html',
    styleUrls:['./agregar.scss']
})
export class AgregarPage implements OnInit{
    constructor(public navCtrl:NavController, private database: FirestoreService){

    }

    volver(){
        this.navCtrl.back()
    }
    data:Producto={
        nombre:'',
        descripcion:'',
        precio:0,
        id:''
      }
    
      productos:Producto[]=[];
    
    
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
        console.log('ola se guardo');
      }
    
      getProductos(){
        this.database.obtenerColeccion<Producto>('Productos').subscribe(prod=>{
          console.log(prod);
          this.productos=prod;
        })
      }
}
