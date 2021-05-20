import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../models/commons/MoviliHeader';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ApplicationService} from '../../../services/roots/business/application.service';
import {ToastService} from '../../../services/controllers/toast.service';
import {ApplicationResponse} from '../../../models/responses/ApplicationResponse';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-appointment-info',
    templateUrl: './appointment-info.page.html',
    styleUrls: ['./appointment-info.page.scss'],
})
export class AppointmentInfoPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.APPOINTMENT_INFO();
    $url: Subscription;
    constructor(private route: ActivatedRoute,
                private applicationService: ApplicationService,
                private toastService: ToastService) {
    }
    fullUrl: string = environment.imageUrl + '/user/';
    services: any = [];
    phoneNumber: string = '+7 7** *** ** **';
    isEditable: boolean = false;
    application: ApplicationResponse = new ApplicationResponse();

    ngOnInit() {
        this.$url = this.route.params.subscribe(data => {
            console.log(data);
            this.applicationService.getApplicationById(data.id).toPromise().then(resp => {
                console.log(resp);
                this.application = resp;
                this.services[0] = {
                    productName: resp.productName,
                    ispProductId: resp.ispProductId,
                    ispProductPrice: resp.ispProductPrice,
                    productId: resp.productId,
                };
            }).catch(err => {
                console.log(err);
                this.toastService.present('Произошла ошибка сервера')
            })
        });
        this.$url.unsubscribe();
    }

}
