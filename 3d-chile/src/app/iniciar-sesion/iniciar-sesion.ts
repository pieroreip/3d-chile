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

    email: string = '';
  password: string = '';

    ngOnInit() {}

  async  iniciar_sesion(){
      const res=await this.auth.signIn(this.email,this.password);

      if(res){
        this.navCtrl.navigateRoot('/home')
      }
      else{
       const alert= await this.alert.create({
          header: 'Alert',
          subHeader: 'Important message',
          message: 'no funciona',
          buttons: ['OK'],
        })
        await alert.present()
      }

    }

    volver(){
        this.navCtrl.back()
    }
    prueba(){
      this.navCtrl.navigateRoot('/home')
    }
}
