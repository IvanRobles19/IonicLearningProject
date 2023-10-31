import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Compra } from '../models/compra.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsCar : Product [] = [];
  public totalCar = 0;
  private compras : Compra [] = [];
  private products: Product[] = [
    {
      name: 'Coca Cola',
      price: 20,
      description: 'La mejor Bebida gaseosa',
      type: 'Abarrotes',
      photo: 'https://picsum.photos/500/300?random',
    },
    {
      name: 'Mango Ataulfo',
      price: 80,
      description: 'El mejor Mango de la temporada',
      type: 'Frutas Y Verduras',
      photo: 'https://picsum.photos/500/300?random',
    },
    {
      name: 'Paracetamol',
      price: 15,
      description: 'Medicamento para el dolor de cabeza',
      type: 'Farmacia',
      photo: 'https://picsum.photos/500/300?random',
    },
    {
      name: 'Fabuloso',
      price: 30,
      description: 'Liquido para limpiar pisos',
      type: 'Limpieza',
      photo: 'https://picsum.photos/500/300?random',
    },
    {
      name: 'Arroz Integral',
      price: 50,
      description: 'Arroz integral de alta calidad en paquete de 1kg.',
      type: 'Abarrotes',
      photo: 'https://picsum.photos/500/300?random',
    },
    {
      name: 'Manzanas Gala',
      price: 35,
      description: 'Manzanas Gala frescas y deliciosas.',
      type: 'Frutas Y Verduras',
      photo: 'https://picsum.photos/500/300?random',
    },
    {
      name: 'Ibuprofeno',
      price: 23,
      description: 'Ibuprofeno 200mg para alivio del dolor.',
      type: 'Farmacia',
      photo: 'https://picsum.photos/500/300?random',
    },
    {
      name: 'Lavavajillas',
      price: 17,
      description: 'Lavavajillas líquido con aroma a limón.',
      type: 'Limpieza',
      photo: 'https://picsum.photos/500/300?random',
    },
    {
      name: 'Aceite de Oliva Extra Virgen',
      price: 31,
      description: 'Aceite de oliva extra virgen de alta calidad, botella de 500ml.',
      type: 'Abarrotes',
      photo: 'https://picsum.photos/500/300?random',
    },
    {
      name: 'Manzanas Orgánicas',
      price: 21,
      description: 'Manzanas orgánicas frescas, paquete de 4 unidades.',
      type: 'Frutas Y Verduras',
      photo: 'https://picsum.photos/500/300?random',
    },
    {
      name: 'Cubrebocas',
      price: 100,
      description: 'Cubrebocas de 3 capas, paquete de 10 piezas.',
      type: 'Farmacia',
      photo: 'https://picsum.photos/500/300?random',
    },
    {
      name: 'Detergente para Ropa',
      price: 25,
      description: 'Detergente líquido para ropa, botella de 2 litros.',
      type: 'Limpieza',
      photo: 'https://picsum.photos/500/300?random',
    },
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product):void{
    console.log(product);
    if(product.cantidad == undefined){
      product.cantidad = 1;
      this.productsCar.push(product);
    }else{
    product.cantidad += 1;
    }
    this.totalCar++;
  }

  clearCar():void{
    this.products.forEach((product) => {
      product.cantidad = undefined;
    });
    this.productsCar = [];
    this.totalCar = 0;
  }

  total():number{
    let total = 0;
    for(let product of this.productsCar){
      if(product.cantidad != undefined){
      total += product.price * product.cantidad;
      }
    }
    return total;
  }

  totalCart():number{
    return this.totalCar;
  }

  getProductsCar(): Product[] {
    return this.productsCar;
  }

  addCompra(compra: Compra):void{
    this.compras.push(compra);
  }
  
  getCompras(): Compra[] {
    return this.compras;
  }

}
