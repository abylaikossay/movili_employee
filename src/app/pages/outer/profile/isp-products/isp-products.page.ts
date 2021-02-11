import { Component, OnInit } from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';

@Component({
  selector: 'app-isp-products',
  templateUrl: './isp-products.page.html',
  styleUrls: ['./isp-products.page.scss'],
})
export class IspProductsPage implements OnInit {
  moviliHeader: MoviliHeader = MoviliHeader.ISP_SERVICES();
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

  constructor() { }

  ngOnInit() {
  }

      changeProducts(category: any) {
        this.categories.forEach(element => element.selected = false);
        category.selected = true;
      }
}
