import { Injectable } from '@angular/core';
import {initializeApp} from 'firebase/app';
import {getStorage,uploadBytes,ref,getDownloadURL,deleteObject} from 'firebase/storage';
import { environment } from 'src/environments/environment'; 
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  app=initializeApp(environment.firebaseConfig);
  storage=getStorage(this.app);

  constructor(public database:FirestoreService) { }

  subirImagen(file:any,data:any,path:string,id:string){
    const storageRef=ref(this.storage,`Productos/${id}`);
    uploadBytes(storageRef,file).then(()=>{
      console.log('subideee');
      getDownloadURL(storageRef).then((url)=>{
        console.log('url -> : '+url);
        data.imagen=url;
        this.database.crearDocumento(data,path,id);
      })
    })
  }
  eliminarImagen(id:string){
    const storageRef=ref(this.storage,`Productos/${id}`);
    deleteObject(storageRef).then(()=>{
      console.log(`Imagen eliminada (${id})`);
    })
  }
}
