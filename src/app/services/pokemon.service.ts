import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class PokemonService extends HttpService {

  constructor(public _http: HttpClient) {
    super(_http);
  }

  public getPokemon(id:number):Observable<any>{
    const url = `${this.URLApi}/${id}/`;
    return this.get(url);
  }
}
