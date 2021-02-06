import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-news-banner',
    templateUrl: './news-banner.component.html',
    styleUrls: ['./news-banner.component.scss'],
})
export class NewsBannerComponent implements OnInit {
    slideOpts = {
        initialSlide: 0,
        speed: 400,
    };
    banners: any = [1, 2, 3];

    constructor() {
    }

    ngOnInit() {
    }

}
