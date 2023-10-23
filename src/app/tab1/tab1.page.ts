import { Component } from '@angular/core';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public products : Product [] = [];
  public productsFounds : Product [] = [];
  public filter = [
    "Abarrotes",
    "Frutas Y Verduras",
    "Farmacia",
    "Limpieza"
  ] 
  public productsCar : Product [] = [];

  constructor() {
    this.products.push({
      name: 'Coca Cola',
      price: 20,
      description: 'La mejor Bebida gaseosa',
      type: 'Abarrotes',
      photo: 'https://picsum.photos/500/300?random'
    });
    this.products.push({
      name: 'Mango Ataulfo',
      price: 80,
      description: 'El mejor Mango de la temporada',
      type: 'Frutas Y Verduras',
      photo: 'https://picsum.photos/500/300?random'
    });
    this.products.push({
      name: 'Paracetamol',
      price: 15,
      description: 'Medicamento para el dolor de cabeza',
      type: 'Farmacia',
      photo: 'https://picsum.photos/500/300?random'
    });
    this.products.push({
      name: 'Fabuloso',
      price: 30,
      description: 'Liquido para limpiar pisos',
      type: 'Limpieza',
      photo: 'https://picsum.photos/500/300?random'
    });

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
    console.log(product);
    if(product.cantidad == undefined){
      product.cantidad = 1;
      this.productsCar.push(product);
    }else{
    product.cantidad += 1;
    }
    
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

  public getProductsCar():any{
    return this.productsCar;
  }
}
