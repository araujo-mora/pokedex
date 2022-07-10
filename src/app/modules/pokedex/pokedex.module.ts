import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexHomeComponent } from './pokedex-home/pokedex-home.component';
import { PokedexComponent } from './pokedex.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from 'src/app/layout/loader/loader.interceptor';
import { DataShareService } from 'src/app/services/data-share.service';
import { LoaderService } from 'src/app/services/loader.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { DataRenderPipe } from 'src/app/pipes/data-render.pipe';


@NgModule({
  declarations: [
    PokedexComponent,
    PokedexHomeComponent,
    DataRenderPipe
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    HttpClientModule,
  ],
  providers:[
    PokemonService,
    DataShareService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: LoaderInterceptor, 
      multi: true
    },
  ]
})
export class PokedexModule { }
