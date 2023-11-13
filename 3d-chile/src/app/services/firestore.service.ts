import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/compat/firestore'
import {Observable} from 'rxjs'
//import { FirestorageService } from './firestorage.service';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs : AngularFirestore) { }

   crearDocumento(data: any, path: string, id: string){
    const coleccion = this.afs.collection(path);
    return coleccion.doc(id).set(data)
   }

  createDoc(){
  }
  getCollection(){
    console.clear();
    console.log('hola prueba de coleccion uwu');
    this.afs.collection('Productos').valueChanges().subscribe((respuesta)=>{
      console.log(respuesta)
    })
  }
  obtenerColeccion<tipo>(path:string){
    return this.afs.collection<tipo>(path).valueChanges()
  }

  crearID(){
    return this.afs.createId();
  }
  eliminarProd(id:string){
this.afs.collection('Productos').doc(id).delete();
  }
  modificarProd(id:string, data:any){
    this.afs.collection('Productos').doc(id).update(data)
  }
}
