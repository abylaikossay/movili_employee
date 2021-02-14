import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorProfilePageRoutingModule } from './author-profile-routing.module';

import { AuthorProfilePage } from './author-profile.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AuthorProfilePageRoutingModule,
        CommonHeaderModule,
    ],
  declarations: [AuthorProfilePage]
})
export class AuthorProfilePageModule {}
