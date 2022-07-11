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
      }else if(type == 'name'){
        var capital = value.substring(0,1);
        var lower = value.substring(1);
        this.output = capital.toUpperCase()+lower;
      }else if(type == 'icon'){
        if(value == 'normal'){
          this.output = 'fa-solid fa-circle-nodes';
        }else if(value == 'fighting'){
          this.output = 'fa-solid fa-hand-fist';
        }else if(value == 'flying'){
          this.output = 'fa-solid fa-mosquito';
        }else if(value == 'poison'){
          this.output = 'fa-solid fa-skull-crossbones';
        }else if(value == 'ground'){
          this.output = 'fa-solid fa-earth-americas';
        }else if(value == 'rock'){
          this.output = 'fa-solid fa-meteor';
        }else if(value == 'bug'){
          this.output = 'fa-solid fa-bug';
        }else if(value == 'ghost'){
          this.output = 'fa-solid fa-ghost';
        }else if(value == 'steel'){
          this.output = 'fa-solid fa-shield';
        }else if(value == 'fire'){
          this.output = 'fa-solid fa-fire-flame-curved';
        }else if(value == 'water'){
          this.output = 'fa-solid fa-water';
        }else if(value == 'grass'){
          this.output = 'fa-solid fa-seedling';
        }else if(value == 'electric'){
          this.output = 'fa-solid fa-bolt-lightning';
        }else if(value == 'psychic'){
          this.output = 'fa-solid fa-brain';
        }else if(value == 'dragon'){
          this.output = 'fa-solid fa-dragon';
        }else if(value == 'dark'){
          this.output = 'fa-solid fa-moon';
        }else if(value == 'fairy'){
          this.output = 'fa-solid fa-khanda';
        }else if(value == 'unknown'){
          this.output = 'fa-solid fa-square-question';
        }else if(value == 'shadow'){
          this.output = 'fa-solid fa-skull';
        }else if(value == 'ice'){
          this.output = 'fa-solid fa-snowflake';
        }
      }
    }
    return this.output;
  }

}
