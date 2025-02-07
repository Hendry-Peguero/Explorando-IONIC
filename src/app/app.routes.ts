import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'sumadora',
    loadComponent: () => import('./pages/sumadora/sumadora.page').then( m => m.SumadoraPage)
  },
  {
    path: 'traductor',
    loadComponent: () => import('./pages/traductor/traductor.page').then( m => m.TraductorPage)
  },
  {
    path: 'tabla',
    loadComponent: () =>
      import('./pages/tabla/tabla.page').then(m => m.TablaPage),
  },
  {
    path: 'experiencia',
    loadComponent: () => import('./pages/experiencia/experiencia.page').then( m => m.ExperienciaPage)
  },
];
