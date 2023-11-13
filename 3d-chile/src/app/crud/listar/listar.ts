import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Producto } from 'src/app/modelo/producto';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AlertController } from '@ionic/angular';
import { FirestorageService } from 'src/app/services/firestorage.service';
@Component({
    selector: 'app-listar',
    templateUrl: './listar.html',
    styleUrls:['./listar.scss']
})
export class ListarPage implements OnInit{
    constructor(private altCtrl:AlertController,public navCtrl:NavController, private database : FirestoreService, public storage:FirestorageService){

    }

    //crecion de alert para mostrar la accion realizada
    alertConfirmacion(accion:string){
      return {
        header:'Exitoso',
        message:`Producto ${accion} exitosamente!`,
        buttons:['Ok']
      }
    }
    
    //variable array con instancia del modelo "Producto",  para almacenar los productos de la base de datos
    productos:Producto[]=[];

    //inicializador
    ngOnInit() {
        this.getProductos();
    }

    //funcion para volver a la pagina anterior
    volver(){
        this.navCtrl.back()
    }

    //funcion para obtener los productos almacenados en la base de datos
    getProductos(){
        this.database.obtenerColeccion<Producto>('Productos').subscribe(prod=>{
          console.log(prod);
          this.productos=prod;
        })
      }

      //funcion para eliminar un producto
     async eliminarProducto(prod:Producto){

      //creacion de alert para poder tomar la decision de querer eliminar o no el producto
        const alert=await this.altCtrl.create({
          header:'Precaucion',
          message:'¿Seguro que quieres eliminar este producto?'
          ,buttons:[
            {
              text:'Eliminar',
              handler:async ()=>{ 
                //creacion de funcion para eliminar el producto gracias al boton de eleccion
                this.storage.eliminarImagen(prod.id);
                this.database.eliminarProd(prod.id);
                const alert2=await this.altCtrl.create(this.alertConfirmacion('eliminado'));
                alert2.present();
              }
            },
            {
              text:'Cancelar' //por si la eleccion es no eliminar el producto
            }
          ]
        });
        alert.present();
       
      }

      //funcion para poder modificar el producto
    async modificarProducto(prod:Producto){//parametro con la instancia de ser un objeto

      //creacion de alert para poder ingresar los datos a cambiar
      const alert=await this.altCtrl.create({
        header:`Modificar producto(${prod.nombre})`,
        inputs:[ //inputs para poder ingresar los nuevos datos para modificar
          {type:'text', label:'nombre',value:prod.nombre, name:'nombre'}, //el valor por predeterminado sera el producto sin modificar
          {type:'text', label:'descripcion',value:prod.descripcion, name:'desc'},
          {type:'text', label:'precio',value:prod.precio,name:'precio'},
        ],
        buttons:[
          {
            text:'Modificar',
            handler:(res)=>{// creacion de funcion para poder modificar el producto
              let datos={//toma los datos de los inputs ddl alert creado
                nombre:res.nombre,
                descripcion:res.desc,
                precio:parseInt(res.precio),
                id:prod.id
              }
              this.database.modificarProd(prod.id,datos);//ingresa los datos a la funcion para poder actualizar la info del producto
            }
          },
          {
            text:'Cancelar'//por si cancela la accion de querer modificar
          }
        ]
      });
      
      alert.present();
      //presentacion del alert
    }
}
