import { Product } from './../models/product.model';
import { Compra } from './../models/compra.model';
import { Component } from '@angular/core';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public productsCar : Product [] = [];
  
  
  constructor( private cartService: CartService) {
    this.productsCar = this.cartService.getProductsCar();
    
  }

  public total():number{
    let total = 0;
    for(let product of this.productsCar){
      if(product.cantidad != undefined){
      total += product.price * product.cantidad;
      }
    }
    return total;
  }

  public priceTotal(product: Product):number{
    if(product.cantidad != undefined){
    return product.price * product.cantidad;
    }
    return 0;
  }

  public comprar(carrito:Product[]):void{
    let cantidades: number[] = carrito
  .map((product) => product.cantidad)
  .filter((cantidad): cantidad is number => cantidad !== undefined);
    let compra: Compra = {
      productos: carrito,
      cantidades: cantidades,
      total: this.total(),
      fecha: new Date().toString()
    }
    this.cartService.addCompra(compra);
    console.log(this.cartService.getCompras());
    this.cartService.clearCar();
    this.productsCar = this.cartService.getProductsCar();
    
  }

  getQuantitiesList() {
    return this.productsCar.map((product) => {
      return {
        name: product.name,
        quantity: product.cantidad,
      };
    });
  }


}
