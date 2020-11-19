import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.scss'],
})
export class FingerprintComponent implements OnInit {

  constructor(private faio: FingerprintAIO) {
    this.faio.show({
      title: 'Biometric Authentication',
      subtitle: 'Coolest Plugin ever',
      description: 'Please authenticate',
      fallbackButtonTitle: 'Use Backup',
      disableBackup:true,
    })
        .then((result: any) => console.log(result))
        .catch((error: any) => console.log(error));
  }

  ngOnInit() {}

}


