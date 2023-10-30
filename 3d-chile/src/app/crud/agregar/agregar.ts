import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Producto } from 'src/app/modelo/producto';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AlertController } from '@ionic/angular';


@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.html',
    styleUrls:['./agregar.scss']
})
export class AgregarPage implements OnInit{
    constructor(public navCtrl:NavController, private database: FirestoreService, public altCtrl:AlertController){

    }

    alertError={
      header: `Error`,
      subHeader: `Campos no rellenados`,
      message: `Tendra que rellenar los campos faltantes`,
      buttons: ['De nuevo'],
    };

    alertMensaje(data:any){
      return {
        
          header: `Producto: ${data.nombre}`,
          subHeader: `Precio: ${data.precio}`,
          message: `${data.descripcion}`,
          buttons: [{
            text:'Ver lista de productos',
            handler:()=>{
              this.navCtrl.navigateRoot('/menu/listar');
            },
            cssClass:'agregarBoton'
          },
          {
            text:'Seguir agregando'
          }
        ],
        
      }
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
      async crearDocumento(){
        console.log(this.data)
        /*
        const producto:Producto={
          nombre:'Among us',
          descripcion:'Sus producto',
          precio:15000
        }
        */
        if(this.data.nombre!='' && this.data.descripcion!='' && this.data.precio>0){
          const id=this.database.crearID();
    
          this.data.id=id;
      
          this.database.crearDocumento(this.data,'Productos',id);
          console.log('ola se guardo');
  
  
  
  
          const alert= await this.altCtrl.create(this.alertMensaje(this.data))
          await alert.present();
          this.normalState();
        }
        else{
          const alert= await this.altCtrl.create(this.alertError)
          await alert.present();
        }


      }
    
      getProductos(){
        this.database.obtenerColeccion<Producto>('Productos').subscribe(prod=>{
          console.log(prod);
          this.productos=prod;
        })
      }

      normalState(){
        this.data={
          nombre:'',
          descripcion:'',
          precio:0,
          id:''
        }
            }
}
