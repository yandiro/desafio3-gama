import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  private BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

  fetchPokemons(offSet: number = 0, limit: number = 20): Observable<any> {
    return this.http.get(`${this.BASE_URL}/?offset=${offSet}&limit=${limit}`);
  }


  fetchPokemonDetails(url: string): Observable<any> {
    return this.http.get(url);
  }

}
