import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Producto } from 'src/app/modelo/producto';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AlertController } from '@ionic/angular';
@Component({
    selector: 'app-listar',
    templateUrl: './listar.html',
    styleUrls:['./listar.scss']
})
export class ListarPage implements OnInit{
    constructor(private altCtrl:AlertController,public navCtrl:NavController, private database : FirestoreService){

    }


    alertConfirmacion(accion:string){
      return {
        header:'Exitoso',
        message:`Producto ${accion} exitosamente!`,
        buttons:['Ok']
      }
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

     async eliminarProducto(prod:Producto){
        const alert=await this.altCtrl.create({
          header:'Precaucion',
          message:'¿Seguro que quieres eliminar este producto?'
          ,buttons:[
            {
              text:'Eliminar',
              handler:async ()=>{
                this.database.eliminarProd(prod.id);
                const alert2=await this.altCtrl.create(this.alertConfirmacion('eliminado'));
                alert2.present();
              }
            },
            {
              text:'Cancelar'
            }
          ]
        });
        alert.present();
       
      }

    async modificarProducto(prod:Producto){
      const alert=await this.altCtrl.create({
        header:`Modificar producto(${prod.nombre})`,
        inputs:[
          {type:'text', label:'nombre',value:prod.nombre, name:'nombre'},
          {type:'text', label:'descripcion',value:prod.descripcion, name:'desc'},
          {type:'text', label:'precio',value:prod.precio,name:'precio'},
        ],
        buttons:[
          {
            text:'Modificar',
            handler:(res)=>{
              let datos={
                nombre:res.nombre,
                descripcion:res.desc,
                precio:parseInt(res.precio),
                id:prod.id
              }
              this.database.modificarProd(prod.id,datos);
            }
          },
          {
            text:'Cancelar'
          }
        ]
      });
      
      alert.present();
      //this.database.modificarProd;
    }
}
