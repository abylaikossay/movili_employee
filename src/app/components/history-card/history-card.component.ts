import { Component, OnInit } from '@angular/core';
import {SettingControllerService} from '../../services/controllers/setting-controller.service';
import {PopOverService} from '../../services/controllers/pop-over.service';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss'],
})
export class HistoryCardComponent implements OnInit {

  constructor(private settingControllerService: SettingControllerService,
              ) { }

  ngOnInit() {}

  async goToInfo() {
    const alertChooseAction = this.settingControllerService.setAlertOrderAction();
    const value = await alertChooseAction.present();
    console.log(value);
  }
}
