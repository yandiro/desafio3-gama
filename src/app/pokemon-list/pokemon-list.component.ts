import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(
    private pokeService: PokeApiService
    ) { }

  public pokemonList;

  public itemsInCart: any[] = [];


  /** Template will list pokemons only if its true.
   * Preventing "Cannot read property 'results' of undefined" error */
  public show: boolean = false;


  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons(offSet: number = 0, limit: number = 20) {
    this.pokeService.fetchPokemons(offSet, limit)
      .subscribe(
        (res: any) => {
          this.pokemonList = res;
          console.log(this.pokemonList)

          this.length = res.count;
          this.fetchPokemonDetails();
        },
        err => { console.error('pokemonList', err) }
      );
  }

  fetchPokemonDetails() {
    this.pokemonList.results.forEach(pokemon => {
      let url: string = pokemon.url;

      this.pokeService.fetchPokemonDetails(url)
        .subscribe(
          res => { console.log(res); pokemon.details = res },
          err => { console.error(err) }
        );
    });

    this.show = true;
  }

  // MatPaginator
  length: number;
  handlePageEvent(event: PageEvent) {
    let limit, offSet;

    limit = event.pageSize;
    offSet = event.pageSize * (event.pageIndex + 1);

    this.fetchPokemons(offSet, limit);
  }

  addToCart(pokemon: any) {
    this.itemsInCart.push(pokemon);
    console.log(this.itemsInCart);
  }

}
