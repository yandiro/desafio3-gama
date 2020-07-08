import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartPrice: string;
  itemsInCart: any[];

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.watchCartService();
  }

  public clearCart(): void {
    const length = this.itemsInCart.length;
    this.itemsInCart.splice(0, length);
  }

  public deleteFromCart(index: number): void {
    this.itemsInCart.splice(index, 1);
  }

  private fetchCart(): void {
    this.cartPrice = this.cartService.cartPrice;
    this.itemsInCart = this.cartService.cartItems;
  }

  private watchCartService() {
    this.cartService.itemsInCart$.subscribe(() => {
      this.fetchCart()
    })
  };

}
