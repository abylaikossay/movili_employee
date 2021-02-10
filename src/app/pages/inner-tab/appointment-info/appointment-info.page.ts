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
  services: any = [1, 2, 3];
  phoneNumber: string = "+7 7** *** ** **";
  isEditable: boolean = false;

  ngOnInit() {
  }

}
