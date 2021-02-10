import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../models/commons/MoviliHeader';
import {OnInitResolver} from '../../../models/abstracts/OnInitResolver';
import {ActivatedRoute} from '@angular/router';
import {map, take} from 'rxjs/operators';
import {UserLocationResponse} from '../../../models/responses/UserLocationResponse';
import {ModalService} from '../../../services/controllers/modal.service';
import {NavController} from '@ionic/angular';
import {BannersResponse} from '../../../models/responses/BannersResponse';
import {BannerService} from '../../../services/roots/business/banner.service';

@Component({
    selector: 'app-home-tab',
    templateUrl: './home-tab.page.html',
    styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit, OnInitResolver {
    moviliHeader: MoviliHeader = {};
    userLocations: UserLocationResponse[];
    applications: any = [1, 2, 3, 4, 5];
    banners: BannersResponse[];

    constructor(public route: ActivatedRoute,
                private modalService: ModalService,
                private navCtrl: NavController,
                private bannerService: BannerService) {
        this.initResolvers();
    }

    ngOnInit() {
        this.getBanners()
    }

    getBanners() {
        this.bannerService.getBanners().toPromise().then(response => {
            console.log(response);
            this.banners = response;
        }).catch(error => {
            console.error(error);
        });
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
        this.modalService.present().then(resp => {
            console.log(resp);
        }).catch(error => {
            console.error(error);
        });
    }

    goToApplication() {
        this.navCtrl.navigateForward(['appointment-info']);
    }
}
