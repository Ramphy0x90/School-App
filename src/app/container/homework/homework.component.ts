import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../service/database.service";
import {Homework} from "../../mock/homework";

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss'],
})
export class HomeworkComponent implements OnInit {

  homeworks: Homework[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.homeworks = this.databaseService.getHomeworks();
  }

  openModal(){
  }
}
