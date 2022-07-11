import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LayoutRoutingModule } from './layout-routing.module';
import { CustomPipesModule } from '../pipes/custom-pipes.module';
import { LoaderService } from '../services/loader.service';
import { PokemonService } from '../services/pokemon.service';
import { LoaderInterceptor } from './loader/loader.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [
    LoaderComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    LayoutRoutingModule,
    CustomPipesModule,
  ],
  providers:[
    LoaderService,
    PokemonService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: LoaderInterceptor, 
      multi: true
    },
  ]
})
export class LayoutModule { }
