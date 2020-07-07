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
  
  public updateCart() {
    // this.itemsInCart = this.cart.itemsInCart;
    console.log('updateCart!!')
  }
}
