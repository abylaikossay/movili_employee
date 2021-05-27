import {Injectable} from '@angular/core';
import {OrderControllerService} from './order-controller.service';

@Injectable({
    providedIn: 'root',
})
export class OrderService {

    constructor(private orderControllerService: OrderControllerService) {
    }

    getOrders(status: number) {
        return this.orderControllerService.getOrders(status);
    }
}
