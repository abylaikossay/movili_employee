import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryTabPageRoutingModule } from './history-tab-routing.module';

import { HistoryTabPage } from './history-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryTabPageRoutingModule
  ],
  declarations: [HistoryTabPage]
})
export class HistoryTabPageModule {}
