import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { productsCar } from '../tab1/tab1.page';


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

}
