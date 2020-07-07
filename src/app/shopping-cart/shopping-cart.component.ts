import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Input() itemsInCart: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public clearCart() {
    const length = this.itemsInCart.length;
    this.itemsInCart.splice(0, length)
    this.itemsInCart.splice(0, length)
  }

  public deleteFromCart(index: number) {
    this.itemsInCart.splice(index, 1);
  }
}
