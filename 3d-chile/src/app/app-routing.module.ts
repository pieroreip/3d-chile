import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    loadChildren: () => import('./crud/agregar/modulo').then( m => m.AgregarPageModule)
  },
  {
    path: 'menu/listar',
    loadChildren: () => import('./crud/listar/modulo').then( m => m.ListarPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/modulo').then( m => m.MenuPageModule)
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
