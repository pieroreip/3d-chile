import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importación del módulo de autenticación de AngularFire
import { AlertController } from '@ionic/angular';

import {getDatabase, set, ref,} from 'firebase/database';
// @ts-ignore
export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot {
  // ...
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private alertController : AlertController) {}  
  
  // Inyectamos AngularFireAuth

  getProd(userId:string, nombre:string, descripcion:string, precio:number){
    const db=getDatabase();
    set(ref(db,'Productos/'+userId),{
      nombre:nombre,
      descripcion:descripcion,
      precio:precio
    });

  }

  async signIn(email: string, password: string): Promise<boolean> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password); // Utilizamos el método de AngularFireAuth
      return true;
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      return false;
    }
  }

  async signUp(email: string, password: string): Promise<any> {
    try {
        await this.afAuth.createUserWithEmailAndPassword(email, password);
        return true;
    } catch (error) {

      return false;

    }
}

  // Aquí puedes añadir más métodos como signUp, signOut, etc.
}
