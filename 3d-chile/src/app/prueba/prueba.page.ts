import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore.service';
import { Producto } from '../modelo/producto';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {
  
  data:Producto={
    nombre:'',
    descripcion:'',
    precio:0,
    id:''
  }

  
  constructor(private database: FirestoreService, private afs: AngularFireDatabase, private firedata: AuthService,public productos:Observable<any[]>) {

  }

  ngOnInit() {
  this.tener();
  }
  tener(){
  this.afs.list('Productos').valueChanges().subscribe(res=>{
    console.log(res);
  })
}
  crearDocumento(){
    console.log(this.data)
    /*
    const producto:Producto={
      nombre:'Among us',
      descripcion:'Sus producto',
      precio:15000
    }
    */
    const id=this.database.crearID();

    this.data.id=id;

    this.database.crearDocumento(this.data,'Productos',id);
    console.log('ola se guardo')
  }

  agregar(){

  }
}
