import { Component, OnInit } from '@angular/core';
import {Subject} from '../../mock/subject';
import {Router} from "@angular/router";
import {FingerprintComponent} from "../../component/fingerprint/fingerprint.component";
import {FingerprintAIO} from "@ionic-native/fingerprint-aio/ngx";
import {DatabaseService} from "../../service/database.service";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {

  subjects : Subject[];
  constructor(private router: Router, private databaseService: DatabaseService) {
    new FingerprintComponent(new FingerprintAIO());
  }


  ngOnInit() {
    this.subjects = this.databaseService.getAllSubjects();
  }

  getSubject(){
return String(this.databaseService.getAllSubjects())
  }

}
