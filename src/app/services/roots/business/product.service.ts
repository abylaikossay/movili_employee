import {Injectable} from '@angular/core';
import {ProductControllerService} from './product-controller.service';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private productControllerService: ProductControllerService) {
    }
    getIspProducts() {
        return this.productControllerService.getIspProducts();
    }

    getProductById(id) {
        return this.productControllerService.getProductById(id);
    }
}
