import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/compat/firestore'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs : AngularFirestore) { }

  createDoc(){
    this.afs.collection('Productos')
  }
  getCollection(){
    console.clear();
    console.log('hola prueba de coleccion uwu');
    this.afs.collection('Productos').valueChanges().subscribe((respuesta)=>{
      console.log(respuesta)
    })
  }
}
