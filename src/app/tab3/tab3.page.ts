import { Component } from '@angular/core';
import { productsCar } from '../tab1/tab1.page';
import { productsFav } from '../tab1/tab1.page';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public productsFav = productsFav;

  constructor() {}

  public eliminarFav(index : any){
    productsFav.splice(index, 1);
  }


}
