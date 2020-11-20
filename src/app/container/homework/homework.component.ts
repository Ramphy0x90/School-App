import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../service/database.service";
import {Homework} from "../../mock/homework";
import {ModalController} from "@ionic/angular";
import {HomeworkModalComponent} from "../../component/homework-modal/homework-modal.component";

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss'],
})
export class HomeworkComponent implements OnInit {

  newHomework: Homework = new Homework();

  homeworks: Homework[];

  constructor(private databaseService: DatabaseService, private modalController: ModalController) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.homeworks = this.databaseService.getHomeworks();
  }

  public async presentModal(exist, homework) {
    const modal = await this.modalController.create({
      component: HomeworkModalComponent,
      cssClass: 'modal',
      componentProps: {
        'exist': exist,
        'homework': homework
      }
    });

    await modal.present();
  }
}
