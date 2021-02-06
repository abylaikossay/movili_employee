import { Component, OnInit } from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {NavController} from '@ionic/angular';
import {StorageLocalService} from '../../../../services/storages/storage-local.service';
import {SettingControllerService} from '../../../../services/controllers/setting-controller.service';
import {LoginService} from '../../../../services/roots/business/login.service';
import {UserTemplateRequest} from '../../../../models/requests/UserTemplateRequest';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  moviliHeader: MoviliHeader = MoviliHeader.LOGIN();

  constructor(private navCtrl: NavController,
              private storageLocalService: StorageLocalService,
              private settingControllerService: SettingControllerService,
              private loginService: LoginService) {
  }

  userTemplate: UserTemplateRequest = {
    birthDate: new Date(),
    deviceToken: 'testDeviceToken',
    email: '',
    firstName: '',
    gender: '',
    lastName: '',
    phone: '',
    platform: 'IOS',
    roleName: 'ROLE_ISP',
  };
  userGender: string = '';
  userPhone: string = '';


  ngOnInit() {
  }

  registerUser() {
    if (!this.userTemplate.gender) {
      console.log('ВЫБЕРИ ПОЛ!');
    } else {
      this.userTemplate.phone = '7' + this.userPhone;
      this.loginService.registerTemplateUser(this.userTemplate);
    }
  }

  goToLogin() {
    this.navCtrl.navigateForward(['/login']);
  }

  changePhoneNumber($event: any) {
    if ($event === undefined || $event === '') {
      setTimeout(() => {
        (document as any).getElementById('phoneNumberId').value = '+7 ';
      }, 0);
    }
  }

  async openAlertGender() {
    const alertChooseCity = this.settingControllerService.setAlertChooseGender();
    const value = await alertChooseCity.present();
    console.log(value);
    if (value.data) {
      this.userGender = value?.data || null;
    }
    if (value.data === 'Мужксой') {
      this.userTemplate.gender = 'MALE';
    } else if (value.data === 'Женский') {
      this.userTemplate.gender = 'FEMALE';
    } else {
      this.userTemplate.gender = 'UNI';
    }
  }
}
