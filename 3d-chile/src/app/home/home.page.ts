import { Component,OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Producto } from '../modelo/producto';
import { AuthService } from '../services/auth.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  productos:Producto[]=[];
  usuario:string='';
  usuarioIniciado:boolean=false;
  usuarioAdmin:boolean=false;
  constructor(private database:FirestoreService, private auth:AuthService) {}
  
  async ngOnInit(){
    this.getProductos();
    const uid=await this.auth.getUser()
    if(uid){
      this.usuario=uid;
      this.usuarioIniciado=true;
      if(this.usuario=='admin@gmail.com'){
        this.usuarioAdmin=true;
      }
    }else{
      console.log(`no existe ${this.usuarioIniciado}`)
    }
    console.log();
    //this.getUser();
  }
  
  async cerrar(){
   await this.auth.logOut();
  }

  
  getProductos(){
this.database.obtenerColeccion<Producto>('Productos').subscribe((res)=>{
  this.productos=res;
})
  }
}
