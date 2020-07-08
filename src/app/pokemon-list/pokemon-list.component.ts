import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { PageEvent } from '@angular/material/paginator';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(
    private pokeService: PokeApiService,
    private cartService: ShoppingCartService
  ) { }

  public pokemonList;

  // MatPaginator
  length: number;


  /** Template will list pokemons only if its true.
   * Preventing "Cannot read property 'results' of undefined" error
   */
  public show = false;


  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons(offSet: number = 0, limit: number = 20): void {
    this.pokeService.fetchPokemons(offSet, limit)
      .subscribe(
        (res: any) => {
          this.pokemonList = res;

          this.length = res.count;
          this.fetchPokemonDetails();
        },
        err => { console.error('pokemonList', err); }
      );
  }

  fetchPokemonDetails(): void {
    this.pokemonList.results.forEach(pokemon => {
      const url: string = pokemon.url;

      this.pokeService.fetchPokemonDetails(url)
        .subscribe(
          res => { pokemon.details = res; },
          err => { console.error(err); }
        );
    });

    this.show = true;
  }

  addToCart(pokemon: any): void {
    this.cartService.addToCart(pokemon);
    // this.itemsInCart.push(pokemon);

    // this.cartService.itemsInCart$.next(this.itemsInCart);
  }

  // MatPaginator
  handlePageEvent(event: PageEvent): void {
    this.show = true;

    const limit = event.pageSize;
    const offSet = event.pageSize * (event.pageIndex + 1);

    this.fetchPokemons(offSet, limit);
  }
}
