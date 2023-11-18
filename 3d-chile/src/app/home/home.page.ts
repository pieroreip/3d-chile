import { Component,OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Producto } from '../modelo/producto';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  productos:Producto[]=[]; //variable array con instancia de Producto para almacenar los productos
  usuario:string=''; //variable para despues obtener el nombre de usuario cuando ya inicio sesion
  usuarioIniciado:boolean=false; //variable para saber el estado de si el usuario ha iniciado sesion
  usuarioAdmin:boolean=false; //variable para saber si el usuario ingresado es administrador o no

  constructor(private database:FirestoreService, private auth:AuthService, private alCtrl:AlertController, private ldCtrl:LoadingController) {}
  
  //inicializador
  async ngOnInit(){
    this.getProductos();
    const uid=await this.auth.getUser()
    if(uid){//condicion de que exista el usuario para obtener
      this.usuario=uid;//se agrega a la variable para su posterior uso
      this.usuarioIniciado=true;//se cambia el estado
      if(this.usuario=='admin@gmail.com'){//condicion para saber si la variable coincide en ser administrador
        this.usuarioAdmin=true;//si es administrador, cambiar el estado
      }
    }else{
      this.cargando();
    }
    
  }

  //variable para el segundo alert que aparece despues de confirmar el cierre sesion
  alertConfirmacion={
    header:'Sesion',
    message:'Se cerró sesion exitosamente',
    buttons:['Ok']
  }

  //funcion tipo alert para confirmar el cierre sesion
  async cerrarSesion(){
    const alert=await this.alCtrl.create({
      header:'Precaucion',
      message:'¿Estas seguro de querer cerrar sesion?',
      buttons:[
        {
          text:'Si, estoy seguro',
          handler: async ()=>{//funcion despues ce confirmar el cierre de sesion

            await this.auth.logOut(); //funcion de cierre de sesion
            const alert2= await this.alCtrl.create(this.alertConfirmacion);//creacion de segundo alert con la variable "alertConfirmacion"
            alert2.present();//presentacion del segundo alert
          }
        },
        {
          text:'Cancelar'//por si ha cancelado la accion
        }
      ]
    });
    alert.present();
  }

  async cargando(){
    const cargando=await this.ldCtrl.create({
      message:'Espere un momento...',
      duration:3500
    });
    cargando.present();
  }


  //funcion para obtencion de los productos almacenados en la base de datos
  getProductos(){
this.database.obtenerColeccion<Producto>('Productos').subscribe((res)=>{
  this.productos=res;
})
  }
}
