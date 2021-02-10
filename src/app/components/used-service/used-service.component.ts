import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-used-service',
  templateUrl: './used-service.component.html',
  styleUrls: ['./used-service.component.scss'],
})
export class UsedServiceComponent implements OnInit {
  service: any = {name: 'Макияж "Smoky Eyes"', count: 2};
  constructor() { }

  ngOnInit() {}

}
