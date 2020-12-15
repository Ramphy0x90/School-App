import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Grade} from '../../mock/grade';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-grades-modal',
  templateUrl: './grades-modal.component.html',
  styleUrls: ['./grades-modal.component.scss'],
})
export class GradesModalComponent implements OnInit {

  @Input() grade: Grade = new Grade();
  constructor(private route: ActivatedRoute, private modalController: ModalController) { }

  ngOnInit() {}

  dismiss(){
    this.modalController.dismiss({
      'dismissed': true,
      'grade': this.grade,
      'saveOnClose': true
    });
  }

  closeModal(){
    this.modalController.dismiss({
      'dismissed': true,
      'saveOnClose': false
    });
  }
}
