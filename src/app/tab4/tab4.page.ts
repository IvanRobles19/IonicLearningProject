import { Component } from '@angular/core';
import { Compra } from '../models/compra.model';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  public Compras : Compra[] = [];

  constructor( private cartService: CartService) {
    this.Compras = this.cartService.getCompras();
  }

  subTotal(cantidad: number, precio: number): any {
    if (cantidad != undefined) {
      return precio * cantidad;
    }
  }
}
