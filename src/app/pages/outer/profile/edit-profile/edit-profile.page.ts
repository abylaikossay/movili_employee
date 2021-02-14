import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {IspResponse} from '../../../../models/responses/IspResponse';
import {IspService} from '../../../../services/roots/business/isp.service';
import {StorageLocalService} from '../../../../services/storages/storage-local.service';
import {environment} from '../../../../../environments/environment';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.page.html',
    styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.EDIT_PROFILE();
    ispResponse: IspResponse = new IspResponse();
    imageUrl: string = environment.imageUrl + '/isp_portfolio/';

    constructor(private ispService: IspService,
                ) {
    }

    ngOnInit() {
        this.getIspInfo();
    }

    getIspInfo() {
        this.ispService.getIspInfo().toPromise().then(response => {
            this.ispResponse = response;
            console.log(this.ispResponse);
        }).catch(error => {
            console.log(error);
        });
    }


    editPhoto() {
        console.log('edit photo');
    }

    addNewPhoto() {

    }

    saveUserProfile() {
        console.log('SAVE PROFILE');
    }
}
