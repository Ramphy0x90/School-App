import {Component, OnInit} from '@angular/core';

import {FingerprintComponent} from '../../component/fingerprint/fingerprint.component';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';

import {AlertComponent} from '../../component/alert/alert.component';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
    private toastCtrl = new ToastController();

    currentPassword: number | string = '1234';
    passwordIn: number | string;

    constructor() {
        /*const sqlite = new SQLite();
        const test: Test = new Test(sqlite);

        test.test();*/
        new FingerprintComponent(new FingerprintAIO());
    }

    ngOnInit() {}

    setPassword() {
    }

    checkPassword() {
        if (this.currentPassword == this.passwordIn) {
            new AlertComponent(this.toastCtrl, "", "Nice");
        }else{
            new AlertComponent(this.toastCtrl, "", "Wrong password");
        }
    }
}
