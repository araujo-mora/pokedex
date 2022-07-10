import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Observable, Subscription } from 'rxjs';
import * as _ from 'lodash';
import { PokemonService } from 'src/app/services/pokemon.service';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-pokedex-home',
  templateUrl: './pokedex-home.component.html',
  styleUrls: ['./pokedex-home.component.scss']
})
export class PokedexHomeComponent implements OnInit, OnDestroy {

  private unsubscribe: Subscription[] = [];
  private _pokemonObj: Observable<any>[] = [];
  public showList: boolean;
  _pokemonList:any = [];

  constructor(
    public _pokemonService: PokemonService,
    public _share: DataShareService,
  ) {
    const changeView = this._share.flag$.subscribe((flag)=>{
      if(_.isBoolean(flag))
        this.showList = flag;
    });
    this.unsubscribe.push(changeView);
   }

  ngOnInit(): void {
    this.getAll();
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  getAll(){
    const pokeAllSub = this._pokemonService.getAll().subscribe(
      (data)=>{
        _.forEach(data.results, (pokemon) =>{
          this._pokemonObj.push(this._pokemonService.getOne(pokemon.url));
        });

        forkJoin(this._pokemonObj).subscribe((response) => {
          var aux = [];
          response.forEach(poke => {
            var obj = {
              id: poke.id,
              name: poke.name,
              img: poke.sprites.front_default
            };
            aux.push(obj);
          });
          this._pokemonList = _.orderBy(aux, ["id"], ["asc"]);
        });
      },
      (error)=>{
        console.log(error);
      }
    );
    this.unsubscribe.push(pokeAllSub);
  }

  getOne(pokemonURL){
    const pokeSub = this._pokemonService.getOne(pokemonURL).subscribe((pokemon)=>{
      let poke = {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.front_default
      };
      this._pokemonList.push(poke);
    });
    this.unsubscribe.push(pokeSub);
  }
}
