import {Component, Input, OnInit} from '@angular/core';
import {Homework} from "../../mock/homework";
import {DatabaseService} from "../../service/database.service";

@Component({
  selector: 'app-homework-detail',
  templateUrl: './homework-detail.component.html',
  styleUrls: ['./homework-detail.component.scss'],
})
export class HomeworkDetailComponent implements OnInit {

  @Input()
  homework: Homework;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {}

  getSubject(){
    return this.databaseService.getSubject(this.homework.subjectRef).name;
  }

}
