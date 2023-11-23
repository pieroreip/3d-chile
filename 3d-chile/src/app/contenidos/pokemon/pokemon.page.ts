import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {PokemonService} from '../../services/api.service'
import { AlertController } from '@ionic/angular'; 
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  constructor(public navCtrl:NavController, public pkm:PokemonService, public alertCtrl:AlertController) { }
  nombre:string='';
  habilidades:String[]=[];
  ngOnInit() {
  }
  volver(){
    this.navCtrl.back();
  }

  
  async buscar(){

  if(this.nombre!=''){

      

    this.habilidades=[];

    this.pkm.getPokemon(this.nombre.toLowerCase()).subscribe(res=>{

      console.clear();
      console.log(res)
      console.log(res.abilities.length);
      for(let x=0; x<res.abilities.length; x++){
        this.habilidades.push(res.abilities[x].ability.name.toUpperCase());   
      }
      console.log(this.habilidades);
    })
  }else{
    const alert=await this.alertCtrl.create({
      header:'Error',
      subHeader:'Campos',
      message:'No se ha ingresado algun pokemon para buscar habilidad',
      buttons:['Ok']
    });
    alert.present();
  }


    

    
  }

}
