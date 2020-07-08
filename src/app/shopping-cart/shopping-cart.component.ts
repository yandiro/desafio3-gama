import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    public cartService: ShoppingCartService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public clearCart(): void {
    this.cartService.clearCart();
  }

  public deleteFromCart(index: number): void {
    this.cartService.deleteFromCart(index);
  }

  public finalizePurchase(): void {
    this.clearCart();
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  template:
    `
  <h1 mat-dialog-title>Compra finalizada!</h1>
  <div mat-dialog-content>Obrigado pela preferência.</div>
  `,
})
export class DialogContentExampleDialog { }