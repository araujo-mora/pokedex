import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error1Component } from '../errors/error1/error1.component';
import { PokedexHomeComponent } from './pokedex-home/pokedex-home.component';
import { PokedexComponent } from './pokedex.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
    children: [
      {
        path: 'home',
        component: PokedexHomeComponent,
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: '**',
        component: Error1Component,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
