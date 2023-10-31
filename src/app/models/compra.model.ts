import { Product } from './product.model';

export interface Compra {
    productos: Product[];
    cantidades: number[];
    total: number;
    fecha: string;
}