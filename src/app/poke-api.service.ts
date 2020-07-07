import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  private BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon'

  fetchPokemons(offSet: number = 0, limit: number = 20) {
    return this.http.get(`${this.BASE_URL}/?offset=${offSet}&limit=${limit}`)
  }


  fetchPokemonDetails(id: number) {
    this.http.get(`${this.BASE_URL}/${id}`)
    .subscribe(
      res => { console.log('details',  res) },
      err => { console.error('details',  err) }
    )
  }

}
