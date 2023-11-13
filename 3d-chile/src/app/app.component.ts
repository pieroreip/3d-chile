import { Component, OnInit } from '@angular/core';

import { getStorage,ref, uploadBytes,getDownloadURL} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor() {}

  ngOnInit() {
    console.log('desde el app')
  }

  subirImagen(id:string,file:any):string{
    let imagen:string='';
    const app=initializeApp(environment.firebaseConfig);
    const storage=getStorage(app);
    const storageRef=ref(storage,`Productos/${id}.jpeg`)
    uploadBytes(storageRef,file,{
      contentType:'image/jpeg'
    }).then((snapshot)=>{
      console.log('Uploaded a blob or file!');
      getDownloadURL(ref(storage,`Productos/${id}.jpeg`)).then((url)=>{
         //imagen=url.toString();
        console.log('url ->'+typeof(url))});    
    });
    return imagen;
    
/*
uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
*/

}
    obtenerURL(id:string):string{
      let urlImage:string='';
      const app=initializeApp(environment.firebaseConfig);
      const storage=getStorage(app);
      getDownloadURL(ref(storage,`Productos/${id}.jpeg`)).then((url)=>{
        urlImage=url;
        console.log('url ->'+urlImage)});
        return urlImage;
        
      }

}
