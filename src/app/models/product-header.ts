import { Product } from "./product";

export class ProductHeader {
    products!: Product[];
    total!: number;
    skip!: number;
    limit!: number;
}
