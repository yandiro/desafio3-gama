import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public cartPrice = '0';
  public cartItems: any[] = [];
  public numberOfItemsInCart = this.cartItems.length;

  constructor() { }

  private updateCartPrice(): void {
    let total = 0;

    this.cartItems
      .forEach(pokemon => {
        total += pokemon.details.weight
      });

    this.cartPrice = total.toString();
  }

  public deleteFromCart(index: number): void {
    this.cartItems.splice(index, 1);
    this.updateCartPrice();
  }

  public addToCart(pokemon: any) {
    this.cartItems.push(pokemon);
    this.updateCartPrice();
  }

  public clearCart(): void {
    this.cartItems = [];
    this.updateCartPrice();
  }
}
