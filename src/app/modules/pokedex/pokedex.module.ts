import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexHomeComponent } from './pokedex-home/pokedex-home.component';
import { PokedexComponent } from './pokedex.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from 'src/app/services/pokemon.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { PokedexChartComponent } from './pokedex-chart/pokedex-chart.component';


@NgModule({
  declarations: [
    PokedexComponent,
    PokedexHomeComponent,
    PokemonDetailsComponent,
    PokedexChartComponent,
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    CustomPipesModule
  ],
  providers:[
    PokemonService,
  ]
})
export class PokedexModule { }
