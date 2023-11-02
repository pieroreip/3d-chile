import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-iniciar-sesion',
    templateUrl: './iniciar-sesion.html',
    styleUrls:['./iniciar-sesion.scss']
})
export class IniciarSesionPage implements OnInit{
    constructor(public navCtrl:NavController, private auth: AuthService, private alert: AlertController){
    }

    //variables que se usan en el html como input, parar poder trabajar con las funciones 
    email: string = '';
  password: string = '';

    ngOnInit() {}

    //funcion con parametros para crear alerta, para poder personalizar los mensajes cuando llamas a esta funcion 
    async showMensaje(header:string,subHeader:string,mensaje:string){
      const alerta=await this.alert.create({
        header:header,
        subHeader:subHeader,
        message:mensaje,
        buttons:['Ok']
      })
      alerta.present();
    }
//funcion para poder iniciar sesion gracias a funciones de firebase
  async  iniciar_sesion(){

    //obtener resultado boolean mediante una funcion que se llamo en el constructor(authService) 
      const res=await this.auth.signIn(this.email,this.password);

      if(res){
        this.showMensaje('Bienvenido','Sesion exitosa','Te redigiremos a home');
        this.navCtrl.navigateRoot('/home')
      }
      else{
        this.showMensaje('Error','Sesion fallida','Revise los campos que ingresó');
      }

    }
//funcion para poder registrarse gracias a funciones de firebase
    volver(){
        this.navCtrl.back()
    }
}
