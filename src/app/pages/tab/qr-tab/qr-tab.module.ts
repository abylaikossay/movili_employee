import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrTabPageRoutingModule } from './qr-tab-routing.module';

import { QrTabPage } from './qr-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrTabPageRoutingModule
  ],
  declarations: [QrTabPage]
})
export class QrTabPageModule {}
