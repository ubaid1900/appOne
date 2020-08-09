import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from './services/product.service';

@Injectable({ providedIn: 'root' })
export class GetProductResolver implements Resolve<Product> {
    constructor(private productService: ProductService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | import("rxjs").Observable<Product> | Promise<Product> {
        const id = +route.paramMap.get('id');
        return this.productService.getProduct(id);
    }
}
