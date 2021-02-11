import {GenderEnum} from './GenderEnum';
import {IspTopResponse} from './IspTopResponse';

export class ProductPopularResponse {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  gender: GenderEnum;
  photos: string[];
  fromPrice: number;
  ispInfo: IspTopResponse;
  fromDuration: number;
}
