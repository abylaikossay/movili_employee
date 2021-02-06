import {Component, OnInit} from '@angular/core';
import { MoviliHeader } from '../../../models/commons/MoviliHeader';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
    chats: any = [1, 2, 3];
    moviliHeader: MoviliHeader = MoviliHeader.SMS();

    constructor() {
    }

    ngOnInit() {
    }

}
