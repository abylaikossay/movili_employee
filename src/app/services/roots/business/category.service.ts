import { Injectable } from '@angular/core';
import {CategoryControllerService} from './category-controller.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private categoryControllerService: CategoryControllerService) {
  }

  getCategoriesByUsluga(id: number) {
    return this.categoryControllerService.getCategoriesByService(id);
  }

  getAllProductsByCategoryId(id: number) {
    return this.categoryControllerService.getProductsByCategory(id);
  }


}
