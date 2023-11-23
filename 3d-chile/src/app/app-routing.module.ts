import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, canActivate} from '@angular/fire/compat/auth-guard';
import { map } from 'rxjs';

const uidAdmin='yLjby76aJxXSv1D4iO8tbloNp012';
const adminOnly=()=>map( (user:any)=> !!user && user.uid===uidAdmin)


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'iniciar',
    loadChildren: () => import('./iniciar-sesion/modulo').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/modulo').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'menu/agregar',
    loadChildren: () => import('./crud/agregar/modulo').then( m => m.AgregarPageModule),...canActivate(adminOnly), canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'menu/listar',
    loadChildren: () => import('./crud/listar/modulo').then( m => m.ListarPageModule),...canActivate(adminOnly), canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/modulo').then( m => m.MenuPageModule),...canActivate(adminOnly), canActivate:[AngularFireAuthGuard]
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'prueba',
    loadChildren: () => import('./prueba/prueba.module').then( m => m.PruebaPageModule)
  },
  {
    path: 'colecciones',
    loadChildren: () => import('./contenidos/colecciones/colecciones.module').then( m => m.ColeccionesPageModule)
  },  {
    path: 'agregar-coleccion',
    loadChildren: () => import('./agregar-coleccion/agregar-coleccion.module').then( m => m.AgregarColeccionPageModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./contenidos/pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },

  




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
