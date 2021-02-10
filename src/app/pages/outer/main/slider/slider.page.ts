import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides, NavController} from '@ionic/angular';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.page.html',
    styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {
    @ViewChild('mySlider') slider: IonSlides;
    slideOpts = {
        initialSlide: 0,
        speed: 200,
    };
    slides: any = [{url: 1, text: 'Далее'},{url: 2, text: 'Далее'}, {url: 3, text: 'Начать!'}];
    size: any = [10, 20, 30];
    nextButton: string = 'Далее';

    constructor(private navCtrl: NavController) {
    }

    ngOnInit() {
    }

    goNext(slide: any) {
        console.log(slide);
        this.slider.slideNext();

        if (slide.url === 3) {
            this.navCtrl.navigateForward(['/main/login']);
        }

        // this.

    }
}
