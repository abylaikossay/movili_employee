import { Injectable } from '@angular/core';
import {HttpService} from '../http.service';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {BannersResponse} from '../../../models/responses/BannersResponse';

@Injectable({
  providedIn: 'root'
})
export class BannerControllerService {

  constructor(private httpService: HttpService) {
    this.httpService = this.httpService.setPrefix(environment.url);
  }

  getBanners() {
    return this.httpService.get('/api/info/banner')
        .pipe(map(value => value.body as BannersResponse[]));
  }
}
