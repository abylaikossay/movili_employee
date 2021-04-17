import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../models/commons/MoviliHeader';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-appointment-info',
    templateUrl: './appointment-info.page.html',
    styleUrls: ['./appointment-info.page.scss'],
})
export class AppointmentInfoPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.APPOINTMENT_INFO();
    $url: Subscription;
    constructor(private route: ActivatedRoute,) {
    }

    services: any = [1, 2, 3];
    phoneNumber: string = '+7 7** *** ** **';
    isEditable: boolean = false;

    ngOnInit() {
        this.$url = this.route.params.subscribe(data => {
            console.log(data);
        });
        this.$url.unsubscribe();
    }

}
