import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Producto } from 'src/app/modelo/producto';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AlertController } from '@ionic/angular';
import { FirestorageService } from 'src/app/services/firestorage.service';


@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.html',
    styleUrls:['./agregar.scss']
})
export class AgregarPage implements OnInit{

    constructor(public navCtrl:NavController, private database: FirestoreService, public altCtrl:AlertController,public storage:FirestorageService){

    }

//variable para generar posteriormente un alert
    alertError={
      header: `Error`,
      subHeader: `Campos no rellenados`,
      message: `Tendra que rellenar los campos faltantes`,
      buttons: ['De nuevo'],
    };

    //funcion parametrizada para alert, alert con los datos del producto agregado
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

    //funcion para volver a la pagina anterior
    volver(){
        this.navCtrl.back()
    }

    //variable para poder usar en la funcion de crearDocumento()
    //sirve para obtener los datos de los input
    data:Producto={
        nombre:'',
        descripcion:'',
        precio:0,
        id:'',
        imagen:''
      }
      imagen:any;
    
      //variable array con instancia del modelo "Producto",  para almacenar los productos de la base de datos
      productos:Producto[]=[];
    
      //inicializador
      ngOnInit() {
        this.getProductos();
      }
      imagenInput($event:any){
        const file=$event.target.files[0];
        
        this.imagen=file;
        /*
        let array=this.imagen.name.split('.');
        array[0]='fffff';
        array.join('.');
*/

        
        //console.log(array);
        //this.storage.subirImagen('deprueba',this.imagen,'imagenpro');

      }
      //funcion para poder agregar un producto
      async crearDocumento(){

        //condicion para poder agregar un producto
        if(this.data.nombre!='' && this.data.descripcion!='' && this.data.precio>0){

          //creador de id para el documento que se creara para almacenar el producto agregado
          const id=this.database.crearID();
          
          //almacenar la creacion de id en la varibale data(id)
          this.data.id=id;
          
          //this.data.imagen=await this.storage.subirImagen(this.data.id,this.imagen);


          this.storage.subirImagen(this.imagen,this.data,'Productos',this.data.id);
          
          
          //se llama la funcion de firestore para generar un documento para almacenar el producto
          //this.database.crearDocumento(this.data,'Productos',id);


          
          //creacion de alert para poder avisar de que se agrego un producto
          const alert= await this.altCtrl.create(this.alertMensaje(this.data))
          await alert.present();

          //se llama a la funcion para dejar en estado vacio los campos ya rellenados en la pagina de agregar
          this.normalState();
        }
        else{

          //condicion por si los campos no fueron correctamente rellenados 
          const alert= await this.altCtrl.create(this.alertError)
          await alert.present();
        }


      }
      
      //funcion para obtener los productos almacenados
      getProductos(){
        this.database.obtenerColeccion<Producto>('Productos').subscribe(prod=>{

          //almacenar los productos a la variable productos
          this.productos=prod;
        })
      }

      //funcion para dejar en estado vacio los campos de ingreso de datos
      normalState(){
        this.data={
          nombre:'',
          descripcion:'',
          precio:0,
          id:'',
          imagen:''
        }
            }
}
