import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {ProductService} from '../../../../services/roots/business/product.service';
import {ProductResponse} from '../../../../models/responses/ProductResponse';

@Component({
    selector: 'app-isp-products',
    templateUrl: './isp-products.page.html',
    styleUrls: ['./isp-products.page.scss'],
})
export class IspProductsPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.ISP_SERVICES();
    ispProducts: ProductResponse[];
    categories: any = [
        {
            name: 'Все записи',
            selected: true,
        },
        {
            name: 'Текущие',
            selected: false,
        },
        {
            name: 'В обработке',
            selected: false,
        },
        {
            name: 'Удачные записи',
            selected: false,
        },
        {
            name: 'Текущие',
            selected: false,
        },
        {
            name: 'В обработке',
            selected: false,
        },
        {
            name: 'Удачные записи',
            selected: false,
        },
    ];

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.getIspProducts();
    }

    changeProducts(category: any) {
        this.categories.forEach(element => element.selected = false);
        category.selected = true;
    }
    getIspProducts() {
        console.log('go to api');
        this.productService.getIspProducts().toPromise().then(response => {
            console.log(response);
            this.ispProducts = response;
        }).catch(error => {
            console.error(error);
        });
    }
}
