import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(public _http: HttpClient) {  }

  URLApi = 'https://pokeapi.co/api/v2/pokemon';

  public get(url: string): Observable<any> {
    return this._http.request('GET', url, {responseType:'json', headers: new HttpHeaders().set("Content-Type","application/json")});
  }

  public post(url, params): Observable<any> {
    const body = JSON.stringify(params);
    return this._http.request('POST', url, {responseType:'json', body, headers: new HttpHeaders().set("Content-Type","application/json") });
  }

  public put(url, params): Observable<any> {
    const body = JSON.stringify(params);
    return this._http.request('PUT', url, {responseType:'json', body, headers: new HttpHeaders().set("Content-Type","application/json") });
  }

  public delete(url): Observable<any> {
    return this._http.request('DELETE', url, {responseType:'json', headers: new HttpHeaders().set("Content-Type","application/json") });
  }

}
