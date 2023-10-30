import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController, NavController } from '@ionic/angular';

// Asegúrate de ajustar la ruta si es necesario
// @ts-ignore

export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot {
  // ...
}




@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.html',
  styleUrls:['./registrarse.scss']
})
export class RegistrarsePage implements OnInit {

  // Variables para enlazar con el formulario
  email: string = '';
  password: string = '';


  // Mensaje de error
  errorMessage: string = '';

  constructor(private authService: AuthService, private alertController : AlertController, private nav: NavController) { }

  ngOnInit(): void {
    // Código que quieres que se ejecute al inicializar la página
    // Si no hay necesidad de ejecutar algo específico al iniciar, puedes dejarlo vacío
  }

  volver(){
    this.nav.back();
  }

  async register() {
    const result = await this.authService.signUp(this.email, this.password);
    let mensaje = "";

    if (result !== true) {
      this.errorMessage = result;
      mensaje = "malin bombin";
    } else {
      mensaje = "wenin";
    }

    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
