import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "../../mock/subject";
import {DatabaseService} from "../../service/database.service";
import {Homework} from '../../mock/homework';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-modal',
  templateUrl: './homework-modal.component.html',
  styleUrls: ['./homework-modal.component.scss'],
})
export class HomeworkModalComponent implements OnInit {

  @Input()
  exist: boolean;

  @Input()
  homework: Homework;

  selectedSubject: Subject;

  calculatedDate: string = '';

  subjects: Subject[];

  constructor(private databaseService: DatabaseService, private modalController: ModalController) { }

  ngOnInit() {
    this.subjects = this.databaseService.getAllSubjects();
    this.selectedSubject = this.databaseService.getSubject(this.homework.subjectRef);

    let homeworkDate: Date = new Date(this.homework.dayDate)
    this.calculatedDate =  homeworkDate.getFullYear() + '-' +
          homeworkDate.getMonth() + '-' +
          homeworkDate.getDate();
  }

  insertData(exist, homework){
    if (exist){
      this.databaseService.updateHomework(homework);
    } else {
      this.databaseService.insertHomework(homework);
    }
  }

  dismiss(){
    this.insertData(this.exist, this.homework);
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  closeModal(){
    this.modalController.dismiss({
      'dismissed': true,
    });
  }
}
