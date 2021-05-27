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
import {SettingControllerService} from 'src/app/services/controllers/setting-controller.service';
import {ApplicationService} from '../../../services/roots/business/application.service';
import {ApplicationResponse} from '../../../models/responses/ApplicationResponse';

@Component({
    selector: 'app-home-tab',
    templateUrl: './home-tab.page.html',
    styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit, OnInitResolver {
    moviliHeader: MoviliHeader = {};
    userLocations: UserLocationResponse[];
    applications: ApplicationResponse[];
    banners: BannersResponse[];
    categories: any = [
        {
            id: 1,
            name: 'Все записи',
            selected: true,
        },
        {
            id: 2,
            name: 'Индивидуальные записи',
            selected: false,
        },
    ];
    headerText: string = 'Все записи';

    constructor(public route: ActivatedRoute,
                private modalService: ModalService,
                private settingControllerService: SettingControllerService,
                private navCtrl: NavController,
                private bannerService: BannerService,
                private applicationService: ApplicationService) {
        this.initResolvers();
    }

    ngOnInit() {
        this.getBanners();
        this.getAllApplications(1);
    }

    getAllApplications(id: number) {
        if (id === 1) {
            this.applicationService.getAllApplications().toPromise().then(resp => {
                console.log(resp);
                this.applications = resp.content;
            }).catch(err => {
                console.error(err);
            });
        } else if (id === 2) {
            this.applicationService.getMyApplications().toPromise().then(resp => {
                console.log(resp);
                this.applications = resp;
            }).catch(err => {
                console.error(err);
            });
        }

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
        const modal = this.settingControllerService.setModalFilterComponent();
        modal.present();
    }

    goToApplication(application: ApplicationResponse) {
        this.navCtrl.navigateForward([`appointment-info/${application.appId}`]);
    }

    changeProducts(category: any) {
        console.log(category);
        this.categories.forEach(element => element.selected = false);
        category.selected = true;
        this.getAllApplications(category.id);
        if (category.id === 2) {
            this.headerText = 'Индивидуальные записи';
        } else {
            this.headerText = 'Все записи';
        }
    }
}
