import { Component, OnInit } from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {IspResponse} from '../../../../models/responses/IspResponse';
import {ProfilePageButtons} from '../../../../models/commons/ProfilePageButtons';
import {IspService} from '../../../../services/roots/business/isp.service';
import {NavController} from '@ionic/angular';
import {LoginService} from '../../../../services/roots/business/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  moviliHeader: MoviliHeader = MoviliHeader.PROFILE_DETAIL();
  ispResponse: IspResponse;
  buttons: ProfilePageButtons[] = [
    {goToUrl: 'author-profile', icon: 'about.svg', title: 'Мой профиль'},
    {goToUrl: 'isp-products', icon: 'my-services.svg', title: 'Мои услуги'},
    // {goToUrl: '', icon: 'my-timetable.svg', title: 'Мой график'},
    {goToUrl: '', icon: 'promo-code.svg', title: 'Промо-код и бонусы'},
    {goToUrl: 'isp-subscriptions', icon: 'star.svg', title: 'Подписки'},
    {goToUrl: 'popular-questions', icon: 'help.svg', title: 'Популярные вопросы'},
    {goToUrl: 'about-app', icon: 'about.svg', title: 'О приложении'}
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

  goToBalance() {
    this.navCtrl.navigateForward(['/tabs/profile-tab/balance'])
  }
}
