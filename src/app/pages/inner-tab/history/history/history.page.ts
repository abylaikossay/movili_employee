import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {OrderService} from '../../../../services/roots/business/order.service';
import {OrderResponse} from '../../../../models/responses/OrderResponse';

@Component({
    selector: 'app-history',
    templateUrl: './history.page.html',
    styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.HISTORY('История');
    categories: any = [
        {
            id: 0,
            name: 'В процессе',
            selected: true,
        },
        {
            id: 1,
            name: 'Завершенные',
            selected: false,
        },
        {
            id: 2,
            name: 'Отмененные',
            selected: false,
        },
        {
            id: 3,
            name: 'Принятые',
            selected: false,
        },
    ];
    selectedCategory: any = {id: 0, name: 'В процессе', selected: true};
    history: OrderResponse[] = [];

    constructor(private orderService: OrderService) {
    }

    ngOnInit() {
        //todo add ResolveOnListenerService
        this.getAllOrders();
    }

    getAllOrders() {
        this.orderService.getOrders(this.selectedCategory.id).toPromise().then(resp => {
            console.log(resp);
            this.history = resp.content;
        }).catch(err => {
            console.error(err);
        })
    }

    changeProducts(category: any) {
        this.categories.forEach(element => element.selected = false);
        category.selected = true;
        this.selectedCategory = category;
        this.getAllOrders();
    }

}
