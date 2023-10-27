import { Product } from './product.model';

export interface Compra {
    productos: Product[];
    total: number;
    fecha: string;
}