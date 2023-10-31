import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';


export var productsCar : Product [] = [];
export var productsFav : Product [] = [];

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  public products : Product [] = [];
  public productsFounds : Product [] = [];
  public totalCar = 0;
  public filter = [
    "Abarrotes",
    "Frutas Y Verduras",
    "Farmacia",
    "Limpieza"
  ]

  constructor( private cartService: CartService) {
    this.products = this.cartService.getProducts();
    


    this.productsFounds = this.products;

    
  }

  public filterProducts():void{
    console.log(this.filter);
    this.productsFounds = this.products.filter(
      (item) => {
        return this.filter.includes(item.type);
      }
    );

  }

  public addProduct(product: Product):void{
    this.cartService.addProduct(product);
  }

  public addProductFav(product: Product):void{
    if (!productsFav.some((item) => item.name === product.name)) {
      productsFav.push(product);
    }
    
  }

  public clearCar():void{
    this.cartService.clearCar();
  }


  public total():number{
    return this.cartService.total();
  }

  public totalCart():number{
    return this.cartService.totalCart();
  }


}
