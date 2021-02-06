import { Component, OnInit } from '@angular/core';
import {MoviliHeader} from '../../../models/commons/MoviliHeader';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.page.html',
  styleUrls: ['./profile-tab.page.scss'],
})
export class ProfileTabPage implements OnInit {
  moviliHeader: MoviliHeader = MoviliHeader.PROFILE_DETAIL();

  constructor() { }

  ngOnInit() {
  }

}
