import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent{

  constructor(public toastController: ToastController, private type: string, private message: string) {
    this.presentToast().then(r => {});
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.message,
      duration: 1000,
      color: this.type,
      mode: "ios",
      cssClass: "alertComponent"
    });
    await toast.present();
  }
}
