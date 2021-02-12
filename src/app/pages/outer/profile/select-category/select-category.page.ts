import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {CategoryResponse} from '../../../../models/responses/CategoryResponse';
import {CategoryService} from '../../../../services/roots/business/category.service';
import {environment} from '../../../../../environments/environment';
import {ServiceResponse} from '../../../../models/responses/ServiceResponse';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.page.html',
  styleUrls: ['./select-category.page.scss'],
})
export class SelectCategoryPage implements OnInit {
  $url: Subscription;
  service: ServiceResponse;
  categories: CategoryResponse[] = [];
  imageUrl: string = environment.imageUrl + '/usluga/';
  moviliHeader: MoviliHeader = MoviliHeader.SERVICE_PAGE();
  constructor(private route: ActivatedRoute,
              private categoryService: CategoryService) {

  }

  ngOnInit() {
    this.getCategoriesByServiceId();
  }

  getCategoriesByServiceId() {
    this.$url = this.route.params.subscribe(data => {
      console.log(data);
      if (data.id) {
        this.categoryService.getCategoriesByUsluga(data.id).subscribe(response => {
          console.log(response);
          this.service = response;
          this.categories = response.categoryResponses;
          this.imageUrl += response.photo;
          console.log(this.categories);
        }, error => {
          console.error(error);
        });
      }
    });
  }

  checkCategory(category) {
    category.selected = category.selected !== true;
  }

}
