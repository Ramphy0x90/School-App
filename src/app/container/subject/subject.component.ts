import { Component, OnInit } from '@angular/core';
import { Subject } from '../../mock/subject';
import {DatabaseService} from '../../service/database.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  subjects: Subject[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.subjects = this.databaseService.getAllSubjects();
    console.log("sdjknfjksdfhuisdfhusidf");
    console.log(this.subjects)
  }
}
