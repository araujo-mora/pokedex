import { Component, OnDestroy, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import { DataShareService } from 'src/app/services/data-share.service';
import { PokemonService } from 'src/app/services/pokemon.service';

declare var toastr: any;
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {

  private unsubscribe: Subscription[] = [];
  _pokemons:any = [];
  pokemon: any;

  constructor(
    public _pokemonService: PokemonService,
    public _share: DataShareService
    ) { }

  ngOnInit(): void {
  }

  getPokemon(){
    this._pokemons = [];
    const pokeSub = this._pokemonService.getPokemon(this.pokemon.toLowerCase()).subscribe((pokemon)=>{
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
      this._pokemons.push(poke);
      this._pokemons = _.orderBy(this._pokemons, ["id"], ["asc"]);
      this._share.openModal(true);
      setTimeout(()=>{this._share.sharePokemons(this._pokemons);},200);
    },
    (err)=>{
      console.log(err);
      toastr.error("Not found, change the selection criteria and try again");
    });
    this.unsubscribe.push(pokeSub);
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
