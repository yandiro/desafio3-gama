import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  BASE_URL: string = 'https://pokeapi.co/api/v2/'

  fetch() {
    this.http.get(this.BASE_URL)
      .subscribe(
        res => { console.log(res) },
        err => { console.error(err) }
      )
  }

}
