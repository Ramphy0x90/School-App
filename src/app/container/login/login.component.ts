import {Component, OnInit} from '@angular/core';

import {FingerprintComponent} from '../../component/fingerprint/fingerprint.component';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';

import {AlertComponent} from '../../component/alert/alert.component';
import {ToastController} from '@ionic/angular';

import {Router} from '@angular/router';
import {DatabaseService} from '../../service/database.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
    private toastCtrl = new ToastController();

    public buttonText: string = 'Login';
    public passwordIn: number | string;

    constructor(private router: Router, private databaseService: DatabaseService) {
        new FingerprintComponent(new FingerprintAIO());

        if (!this.checkPasswordExists()) {
            this.buttonText = 'Create password';
        }
    }

    ngOnInit() {}

    checkPasswordExists() {
        return !!this.databaseService.getPassword();
    }

    setPassword() {
        if (!!this.passwordIn) {
            this.databaseService.setPassword(this.passwordIn);
            new AlertComponent(this.toastCtrl, 'success', 'Password created');
            this.buttonText = 'Login';
            this.passwordIn = '';
        } else {
            new AlertComponent(this.toastCtrl, 'warning', 'Please set a valid password');
        }
    }

    checkPassword() {
        if (this.databaseService.getPassword() == this.passwordIn) {
            new AlertComponent(this.toastCtrl, 'success', 'Welcome to SchoolApp');
            this.router.navigate(['/grades']).then(r => {
            });
        } else {
            new AlertComponent(this.toastCtrl, 'danger', "Wrong password");
        }
    }
}
