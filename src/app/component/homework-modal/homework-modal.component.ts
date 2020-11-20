import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "../../mock/subject";
import {DatabaseService} from "../../service/database.service";
import {Homework} from "../../mock/homework";
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

  subjects: Subject[];

  constructor(private databaseService: DatabaseService, private modalController: ModalController) { }

  ngOnInit() {
    this.subjects = this.databaseService.getAllSubjects();
    this.selectedSubject = this.databaseService.getSubject(this.homework.subjectRef);
    console.log(this.homework);
  }

  insertData(){
    if (this.exist){
      this.databaseService.updateHomework(this.homework);
    } else {
      this.databaseService.insertHomework(this.homework);
    }
  }

  dismiss(){
    this.insertData();
    this.homework = new Homework();
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
