import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataShareService {

  public _pokemons = new BehaviorSubject<any>([]);
  public _flag = new BehaviorSubject<any>([]);

  pokemons$ = this._pokemons.asObservable();
  flag$ = this._flag.asObservable();

  constructor() { }

  public shareCountries(pokemon) {
    this._pokemons.next(pokemon);
  }

  public shareView(flag: any) {
    this._flag.next(flag);
  }

}
