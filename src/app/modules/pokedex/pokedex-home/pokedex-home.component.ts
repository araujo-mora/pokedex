import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { PokemonService } from 'src/app/services/pokemon.service';
import { DataShareService } from 'src/app/services/data-share.service';

declare var $: any;

@Component({
  selector: 'app-pokedex-home',
  templateUrl: './pokedex-home.component.html',
  styleUrls: ['./pokedex-home.component.scss']
})
export class PokedexHomeComponent implements OnInit, OnDestroy {

  private unsubscribe: Subscription[] = [];
  _pokemonList:any = [];

  public limit = 19;
  public offset = 1;
  public lastPokemonId = 905;
  public getNextPage = true;
  public showDetails = false;

  constructor(
    public _pokemonService: PokemonService,
    public _share: DataShareService,
  ) {   }

  ngOnInit(): void {
    var modalSub = this._share.openModal$.subscribe((showDetails)=>{
      if(_.isBoolean(showDetails)){
        this.showDetails = showDetails;
        setTimeout(()=>{$("#pokemonDetails").modal("show");},200);
      }
    });
    this.unsubscribe.push(modalSub);
    this.getPokemons(this.offset,this.limit);
    $('#pokemonDetails').on('hidden.bs.modal', ()=> {
      this.showDetails = false;
    });
  }

  getPokemon(id:number){
    const pokeSub = this._pokemonService.getPokemon(id).subscribe((pokemon)=>{
      let poke = {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.front_default,
        stats: pokemon.stats,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types,
        species: pokemon.species.url
      };
      this._pokemonList.push(poke);
      this._pokemonList = _.orderBy(this._pokemonList, ["id"], ["asc"]);
    });
    this.unsubscribe.push(pokeSub);
  }

  getPokemons(offset: number, limit:number){
    var max = offset + limit;
    for(let i = offset; i <= max; i++){
      if(i<=this.lastPokemonId){
        this.getPokemon(i);
      }else{
        this.getNextPage = false;
        break;
      }
    }
  }

  onScrollDown(): void{
    if(this.getNextPage){
      this.offset += 20;
      this.getPokemons(this.offset,this.limit);
    }
  }

  getPokemonDetails(event): void{
    var pokeID: number = parseInt(event.currentTarget.id);
    var poke = this.findPokemon(pokeID, this._pokemonList);
    this._share.sharePokemon(poke);
    this.showDetails = true;
    setTimeout(()=>{$("#pokemonDetails").modal("show");},200);
  }

  findPokemon(pokeID: number, pokemons: any) {
    let pokeSelected = _.find(pokemons, { 'id': pokeID });
    if (!pokeSelected) {
      pokeSelected = _.some(pokemons, { 'id': pokeID });
    }
    return pokeSelected;
  }

  fillFromSearch(){
    
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
