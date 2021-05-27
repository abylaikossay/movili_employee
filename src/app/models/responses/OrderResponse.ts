import {IspResponse} from './IspResponse';
import {ProductResponse} from './ProductResponse';

export class OrderResponse {
  comment: string;
  createdAt: string;
  endTime: string;
  imgUrl: string;
  orderDate: string;
  orderId: number;
  ispInfo: IspResponse;
  products: ProductResponse[];
  startTime: string;
  status: number;
  userId: number;
  userLocation: string;
  userName: string;
  weekDay: string;
}
