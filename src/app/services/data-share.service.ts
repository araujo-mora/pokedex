import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataShareService {

  public _pokemons = new BehaviorSubject<any>([]);
  public _pokemonsSearch = new BehaviorSubject<any>([]);
  public _flag = new BehaviorSubject<boolean>(false);

  pokemons$ = this._pokemons.asObservable();
  pokemonsSearch$ = this._pokemonsSearch.asObservable();
  openModal$ = this._flag.asObservable();

  constructor() { }

  public sharePokemon(pokemon) {
    this._pokemons.next(pokemon);
  }

  public openModal(flag: boolean) {
    this._flag.next(flag);
  }

  public sharePokemons(pokemons) {
    this._pokemonsSearch.next(pokemons);
  }

}
