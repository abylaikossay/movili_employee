import {Component, Input, OnInit} from '@angular/core';
import {OrderResponse} from '../../models/responses/OrderResponse';
import {IspRatingResponse} from '../../models/responses/ispRatingResponse';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent implements OnInit {
  @Input() ispRating: IspRatingResponse;
  photoUrl: string = environment.imageUrl + '/user/';
  constructor() { }

  ngOnInit() {}

}
