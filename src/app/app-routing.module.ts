import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BotoesComponent } from './botoes/botoes.component';
import { CardsComponent } from './cards/cards.component';

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
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
