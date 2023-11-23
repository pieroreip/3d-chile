import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

// Importaciones relacionadas con AngularFire
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouteReuseStrategy } from '@angular/router';

// @ts-ignore
export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot {
  // ...
}


@NgModule({
  declarations: [
    AppComponent,
    // ... otros componentes
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    // Inicialización de AngularFire y módulos relacionados
    AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireDatabaseModule,
    AngularFireAuthModule,AngularFirestoreModule,AngularFireStorageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
