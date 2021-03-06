import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpService} from '../../roots/http.service';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ProfileResolverService implements Resolve<any> {
    constructor(private httpService: HttpService) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.httpService.get(`/api/isp/me`)
            .pipe(map(res => res.body));
    }
}
