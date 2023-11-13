import { Component, OnInit } from '@angular/core';
import { FirestorageService } from '../services/firestorage.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {


  constructor(public storage:FirestorageService) { }

  ngOnInit() {
  }
  /*
  subirImagen(event:any){
    const archivo=event.target.files[0];

    this.storage.subirImagen(archivo,'paprobar');
  }
  */
}
