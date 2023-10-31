import { Component } from '@angular/core';
import { productsCar } from '../tab1/tab1.page';
import { productsFav } from '../tab1/tab1.page';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public productsFav = productsFav;

  constructor( private cartService: CartService  ) {
    
  }

  public eliminarFav(index : any){
    productsFav.splice(index, 1);
  }

  public addProductCar(product : Product){
    if(product.cantidad == undefined){
      product.cantidad = 1;
      productsCar.push(product);
    }else{
    product.cantidad += 1;
    }
  }


}
