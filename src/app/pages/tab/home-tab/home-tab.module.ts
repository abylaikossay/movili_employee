import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTabPageRoutingModule } from './home-tab-routing.module';

import { HomeTabPage } from './home-tab.page';
import {CommonHeaderModule} from '../../../components/header/common-header/common-header.module';
import {NewsBannerModule} from '../../../components/news-banner/news-banner.module';
import {FilterModule} from '../../../components/filter/filter.module';
import { ApplicationsCardModule } from '../../../components/applications-card/applications-card.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomeTabPageRoutingModule,
        CommonHeaderModule,
        NewsBannerModule,
        FilterModule,
        ApplicationsCardModule,
    ],
  declarations: [HomeTabPage]
})
export class HomeTabPageModule {}
