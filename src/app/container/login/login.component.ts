import {Component, OnInit} from '@angular/core';

import {FingerprintComponent} from '../../component/fingerprint/fingerprint.component';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';

import {AlertComponent} from '../../component/alert/alert.component';
import {ToastController} from '@ionic/angular';
import {Credential} from '../../mock/credential';

import { Router } from '@angular/router';

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

    constructor(private router: Router) {
        new FingerprintComponent(new FingerprintAIO());

        if(!this.checkPasswordExists())
            this.buttonText = 'Create password';
    }

    ngOnInit() {}

    checkPasswordExists(){
        return this.currentPassword != '';
    }

    setPassword() {
        this.currentPassword = this.passwordIn;
        this.buttonText = 'Login';
        new AlertComponent(this.toastCtrl, "success", "Password created");
    }

    checkPassword() {
        if(this.checkPasswordExists()) {
            if (this.currentPassword == this.passwordIn) {
                new AlertComponent(this.toastCtrl, "success", "Welcome to SchoolApp");
                this.router.navigate(['/homeworks']).then(r => {})
            } else {
                new AlertComponent(this.toastCtrl, "danger", "Wrong password");
            }
        }else{
            this.buttonText = 'Create password';
            new AlertComponent(this.toastCtrl, "warning", "Please set a password");
        }
    }
}
