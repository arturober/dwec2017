import { IProduct } from './i-product';

export interface ResponseProducts {
    products: IProduct[];
}

export interface ResponseProduct {
    product: IProduct;
}

export interface ResponseOk {
    ok: boolean;
    error?: string;
    id?: number;
}
