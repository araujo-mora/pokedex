import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class PokemonService extends HttpService {

  constructor(public _http: HttpClient) {
    super(_http);
  }

  public getAll(): Observable<any> {
    const url = `${this.URLApi}/`;
    return this.get(url);
  }

  public getOne(url): Observable<any> {
    return this.get(url);
  }
}
