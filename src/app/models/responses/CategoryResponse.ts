import {ProductPopularResponse} from './ProductPopularResponse';

export class CategoryResponse {
  id: number;
  name: string;
  description: string;
  photo: string;
  productResponses: ProductPopularResponse[];
  // rating: number;
  selected: boolean = false;
}
