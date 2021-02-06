import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../models/commons/MoviliHeader';
import {OnInitResolver} from '../../../models/abstracts/OnInitResolver';
import {ActivatedRoute} from '@angular/router';
import {map, take} from 'rxjs/operators';
import {UserLocationResponse} from '../../../models/responses/UserLocationResponse';
import {ModalService} from '../../../services/controllers/modal.service';

@Component({
    selector: 'app-home-tab',
    templateUrl: './home-tab.page.html',
    styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit, OnInitResolver {
    moviliHeader: MoviliHeader = {};
    userLocations: UserLocationResponse[];

    constructor(public route: ActivatedRoute,
                private modalService: ModalService) {
        this.initResolvers();
    }

    ngOnInit() {
    }

    initResolvers() {
        this.route.data
            .pipe(map(value => value.userLocation,
                take(1))).subscribe(value => {
            console.log(value);
            this.userLocations = value;
            if (this.userLocations?.length) {
                this.moviliHeader = MoviliHeader.HOME(this.userLocations[0]?.location);
            }
        });
    }

    goToFilter() {

        this.modalService.setFilterDialogOption(1);
        this.modalService.present();
    }
}
