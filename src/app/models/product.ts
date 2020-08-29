export class Product {
    id: Number;
    name: string;
    brand: Brand;
    fragile = true;
    likeCount: number = 0;
    price: number;
    sellBy: Date;
}

export class Brand {
    id: number;
    name: string;
}
