import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexHomeComponent } from './pokedex-home/pokedex-home.component';
import { PokedexComponent } from './pokedex.component';


@NgModule({
  declarations: [
    PokedexComponent,
    PokedexHomeComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
