import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { Tab1Page } from '../tab1/tab1.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  public productsCar : Product [] = [];
  constructor() {
    
    

  }

}
