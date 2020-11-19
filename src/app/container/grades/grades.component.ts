import { Component, OnInit } from '@angular/core';
import {Subject} from "../../mock/subject";
import {DatabaseService} from "../../service/database.service";

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
})
export class GradesComponent implements OnInit {

  subjects: Subject[];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.subjects = this.databaseService.getAllSubjects();
    console.log(this.subjects);
  }

  public getAverage(subjectId): number{
    return Number(this.databaseService.getSubjectAverage(subjectId).toFixed(2));
  }

  public getTotalAverage(): number{
    return Number(this.databaseService.getAllAverage().toFixed(2));
  }
}
