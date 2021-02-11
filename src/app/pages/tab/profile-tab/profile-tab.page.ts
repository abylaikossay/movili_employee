import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../models/commons/MoviliHeader';
import {IspService} from '../../../services/roots/business/isp.service';
import {IspResponse} from '../../../models/responses/IspResponse';
import {ProfilePageButtons} from '../../../models/commons/ProfilePageButtons';
import {NavController} from '@ionic/angular';
import {LoginService} from '../../../services/roots/business/login.service';

@Component({
    selector: 'app-profile-tab',
    templateUrl: './profile-tab.page.html',
    styleUrls: ['./profile-tab.page.scss'],
})
export class ProfileTabPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.PROFILE_DETAIL();
    ispResponse: IspResponse;
    buttons: ProfilePageButtons[] = [
        {goToUrl: 'user-services', icon: 'my-services.svg', title: 'Мои услуги'},
        {goToUrl: '', icon: 'my-timetable.svg', title: 'Мой график'},
        {goToUrl: '', icon: 'promo-code.svg', title: 'Промо-код и бонусы'},
        {goToUrl: 'popular-questions', icon: 'help.svg', title: 'Популярные вопросы'},
        {goToUrl: 'about-app', icon: 'about.svg', title: 'О приложении'},
    ];


    constructor(private ispService: IspService,
                private navCtrl: NavController,
                private loginService: LoginService) {
    }

    ngOnInit() {
        this.getIspInfo();
    }

    getIspInfo() {
        this.ispService.getIspInfo().toPromise().then(response => {
            this.ispResponse = response;
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    goToSection(goToUrl: string) {
        if (goToUrl !== '') {
            this.navCtrl.navigateForward([`/${goToUrl}`]);
        }
    }

    logOut() {
        this.loginService.logout();
    }

    editUser() {
        this.navCtrl.navigateForward(['/edit-profile']);

    }
}
