import { Product } from './../models/product.model';
import { Compra } from './../models/compra.model';
import { Component } from '@angular/core';
import { productsCar } from '../tab1/tab1.page';
import { Compras } from '../tab4/tab4.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public productsCar = productsCar;
  
  
  constructor() {
    
    

  }

  public total():number{
    let total = 0;
    for(let product of productsCar){
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
    let compra: Compra = {
      productos: carrito,
      total: this.total(),
      fecha: new Date().toString()
    }
    Compras.push(compra);
    //productsCar = [];
  }

}
