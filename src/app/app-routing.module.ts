import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BotoesComponent } from './botoes/botoes.component';
import { CardsComponent } from './cards/cards.component';
import { ListasComponent } from './listas/listas.component';
import { EntradaComponent } from './dados/entrada/entrada.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'botoes',
    pathMatch: 'full',
    component: BotoesComponent
  },
  {
    path: 'cards',
    pathMatch: 'full',
    component: CardsComponent
  },
  {
    path: 'listas',
    pathMatch: 'full',
    component: ListasComponent
  },
  {
    path: 'dados/entrada',
    pathMatch: 'full',
    component: EntradaComponent
  },
  {
    path: 'grid',
    pathMatch: 'full',
    component: GridComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
