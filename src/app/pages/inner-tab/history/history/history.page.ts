import { Component, OnInit } from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  moviliHeader: MoviliHeader = MoviliHeader.HISTORY('История');
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
  history: any = [1, 2];
  orders: any = [{name: 'Текущие'}, {name: 'В обработке'}];

  constructor() {
  }

  ngOnInit() {
  }

  changeProducts(category: any) {
    this.categories.forEach(element => element.selected = false);
    category.selected = true;
  }

}
