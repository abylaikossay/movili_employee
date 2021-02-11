import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {CategoryResponse} from '../../../../models/responses/CategoryResponse';
import {CategoryService} from '../../../../services/roots/business/category.service';
import {unsubscribe} from '../../../../shares/util-method';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.page.html',
  styleUrls: ['./select-category.page.scss'],
})
export class SelectCategoryPage implements OnInit {
  $url: Subscription;
  categories: CategoryResponse[];
  moviliHeader: MoviliHeader = MoviliHeader.SERVICE_PAGE();
  constructor(private route: ActivatedRoute,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategoriesByServiceId();
  }

  getCategoriesByServiceId() {
    this.$url = this.route.params.subscribe(data => {
      if (data.id) {
        this.categoryService.getCategoriesByUsluga(data.id).subscribe(response => {
          this.categories = response.categoryResponses;
          console.log(response);
          console.log(this.categories);
        }, error => {
          console.error(error);
        });
      }
    });
  }

}
