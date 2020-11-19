import {Component, OnInit} from '@angular/core';

import {FingerprintComponent} from '../../component/fingerprint/fingerprint.component';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';

import {AlertComponent} from '../../component/alert/alert.component';
import {ToastController} from '@ionic/angular';
import {Credential} from '../../mock/credential';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
    private toastCtrl = new ToastController();

    private currentPassword: number | string = Credential.password

    public buttonText: string = 'Login';
    public passwordIn: number | string;

    constructor() {
        new FingerprintComponent(new FingerprintAIO());
    }

    ngOnInit() {}

    setPassword() {
        this.currentPassword = this.passwordIn;
        this.buttonText = 'Login';
        new AlertComponent(this.toastCtrl, "success", "Password created");
    }

    checkPassword() {
        if(this.currentPassword != '') {
            if (this.currentPassword == this.passwordIn) {
                new AlertComponent(this.toastCtrl, "success", "Welcome to SchoolApp");
            } else {
                new AlertComponent(this.toastCtrl, "danger", "Wrong password");
            }
        }else{
            this.buttonText = 'Create password';
            new AlertComponent(this.toastCtrl, "warning", "Please set a password");
        }
    }
}
