import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IspProductsPage } from './isp-products.page';

const routes: Routes = [
  {
    path: '',
    component: IspProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IspServicesPageRoutingModule {}
