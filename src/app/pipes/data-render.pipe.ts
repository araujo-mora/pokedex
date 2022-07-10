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
      if(type == 'number'){
        if(value < 10){
          this.output = "N.° 00"+value;
        }
        else if(10 < value && value < 100){
          this.output = "N.° 0"+value;
        }else{
          this.output = "N.° "+value;
        }
      }
      else if(type == 'name'){
        var capital = value.substring(0,1);
        var lower = value.substring(1);
        this.output = capital.toUpperCase()+lower;
      }
    }
    return this.output;
  }

}
