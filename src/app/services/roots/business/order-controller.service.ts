import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {PaginationReponse} from '../../../models/responses/pagination/PaginationReponse';
import {OrderResponse} from '../../../models/responses/OrderResponse';

@Injectable({
    providedIn: 'root',
})
export class OrderControllerService {

    constructor(private httpService: HttpService) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }
    getOrders(status: number) {
        return this.httpService.get('/api/orders?search=status:' + status)
            .pipe(map(value => value.body as PaginationReponse<OrderResponse>));
    }
}
