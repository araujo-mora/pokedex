import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataRender'
})
export class DataRenderPipe implements PipeTransform {
  public output: any;

  transform(value: any, type: any): any {
    if (value == undefined || value == 'undefined') {
      this.output = "No data provided";
    }else{
      this.output = value;
      if(type == 'area'){
        if(value < 10){
          var ha = value * 100;
          this.output = "" + ha + " ha"
        }else{
          this.output = "" + value + " km" 
        }
      }
      if(type == 'population'){
        this.output = value + ' people';
      }
  
      if(type == 'capital'){
        this.output = value;
      }
  
      if(type == 'continent'){
        this.output = value;
      }
  
      if(type == 'currency'){
        this.output = value;
      }

      if(type == 'boolean'){
        if(value == 'false'){
          this.output = 'No';
        }else{
          this.output = "Yes"
        }
      }
      
    }
    return this.output;
  }

}
