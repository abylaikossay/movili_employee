import { Component, OnInit } from '@angular/core';
import { MoviliHeader } from '../../../models/commons/MoviliHeader';

@Component({
  selector: 'app-appointment-info',
  templateUrl: './appointment-info.page.html',
  styleUrls: ['./appointment-info.page.scss'],
})
export class AppointmentInfoPage implements OnInit {
  moviliHeader: MoviliHeader = MoviliHeader.APPOINTMENT_INFO();
  constructor() { }

  ngOnInit() {
  }

}
