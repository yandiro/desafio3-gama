import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Input() itemsInCart: any[] = [];
  @Input() cartPrice: string = '0';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.updateCartPrice();
  }


  public clearCart() {
    const length = this.itemsInCart.length;
    this.itemsInCart.splice(0, length)
    this.updateCartPrice();
  }

  public deleteFromCart(index: number) {
    this.itemsInCart.splice(index, 1);
    this.updateCartPrice();
  }

  updateCartPrice() {
    let total: number = 0;

    this.itemsInCart.forEach(pokemon => {
      total += pokemon.details.weight;
    });

    this.cartPrice = total.toString();
  }
}
