import { Component } from '@angular/core';
import { Product } from '../models/product.model';
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

  subTotal(product: Product): any {
    if (product.cantidad != undefined) {
      return product.price * product.cantidad;
    }
  }
}
