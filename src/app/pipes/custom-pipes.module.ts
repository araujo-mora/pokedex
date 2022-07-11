import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataRenderPipe } from './data-render.pipe';



@NgModule({
  declarations: [ DataRenderPipe ],
  imports: [ ],
  exports:[ DataRenderPipe ]
})
export class CustomPipesModule { }
