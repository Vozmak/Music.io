import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Game } from '../interfaces/game';

export interface Options {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public createGame(game: Game): Observable<{ gameId: string} > {
    return this.#post<{ gameId: string }>('game/create', game);
  }


  #get<T>(endpoint: string, options?: Options): Observable<T> {
    return this.httpClient.get<T>(`${environment.api}${endpoint}`, options);
  }

  #post<T>(endpoint: string, body?: any, options?: Options): Observable<T> {
    return this.httpClient.post<T>(`${environment.api}${endpoint}`, body, options);
  }
}
