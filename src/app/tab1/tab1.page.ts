import { Component } from '@angular/core';
import { Product } from '../models/product.model';


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
  public productsCar = productsCar;
  public productsFav = productsFav;
  public totalCar = 0;
  public filter = [
    "Abarrotes",
    "Frutas Y Verduras",
    "Farmacia",
    "Limpieza"
  ]

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
    this.products.push({
      name: 'Arroz Integral',
      price: 50,
      description: 'Arroz integral de alta calidad en paquete de 1kg.',
      type: 'Abarrotes',
      photo: 'https://picsum.photos/500/300?random'
    });
    
    this.products.push({
      name: 'Manzanas Gala',
      price: 35,
      description: 'Manzanas Gala frescas y deliciosas.',
      type: 'Frutas Y Verduras',
      photo: 'https://picsum.photos/500/300?random'
    });
    
    this.products.push({
      name: 'Ibuprofeno',
      price: 23,
      description: 'Ibuprofeno 200mg para alivio del dolor.',
      type: 'Farmacia',
      photo: 'https://picsum.photos/500/300?random'
    });
    
    this.products.push({
      name: 'Lavavajillas',
      price: 17,
      description: 'Lavavajillas líquido con aroma a limón.',
      type: 'Limpieza',
      photo: 'https://picsum.photos/500/300?random'
    });
    this.products.push({
      name: 'Aceite de Oliva Extra Virgen',
      price: 31,
      description: 'Aceite de oliva extra virgen de alta calidad, botella de 500ml.',
      type: 'Abarrotes',
      photo: 'https://picsum.photos/500/300?random'
    });
    
    this.products.push({
      name: 'Manzanas Orgánicas',
      price: 21,
      description: 'Manzanas orgánicas frescas, paquete de 4 unidades.',
      type: 'Frutas Y Verduras',
      photo: 'https://picsum.photos/500/300?random'
    });
    
    this.products.push({
      name: 'Cubrebocas',
      price: 100,
      description: 'Cubrebocas de 3 capas, paquete de 10 piezas.',
      type: 'Farmacia',
      photo: 'https://picsum.photos/500/300?random'
    });
    
    this.products.push({
      name: 'Detergente para Ropa',
      price: 25,
      description: 'Detergente líquido para ropa, botella de 2 litros.',
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
    
    if(product.cantidad == undefined){
      product.cantidad = 1;
      productsCar.push(product);
    }else{
    product.cantidad += 1;
    }
    this.totalCar++;
  }

  public addProductFav(product: Product):void{
    if (!productsFav.some((item) => item.name === product.name)) {
      productsFav.push(product);
    }
    
  }

  public clearCar():void{
    productsCar = [];
    this.totalCar = 0;
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
