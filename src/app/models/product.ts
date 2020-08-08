export class Product {
    id: Number;
    name: string;
    brand: Brand;
    fragile = true;
    likeCount: number = 0;
}

export class Brand {
    id: number;
    name: string;
}
