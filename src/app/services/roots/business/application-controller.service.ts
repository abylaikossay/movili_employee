import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {BannersResponse} from '../../../models/responses/BannersResponse';
import {ApplicationResponse} from '../../../models/responses/ApplicationResponse';

@Injectable({
    providedIn: 'root',
})
export class ApplicationControllerService {

    constructor(private httpService: HttpService) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }

    getAllApplications() {
        return this.httpService.get('/api/applications/isp/all')
            .pipe(map(value => value.body as ApplicationResponse[]));
    }

    getMyApplications() {
        return this.httpService.get('/api/applications')
            .pipe(map(value => value.body as ApplicationResponse[]));
    }
}
