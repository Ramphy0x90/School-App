import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Subject} from "../../mock/subject";

@Component({
  selector: 'app-subject-avg',
  templateUrl: './subject-avg.component.html',
  styleUrls: ['./subject-avg.component.scss'],
})
export class SubjectAvgComponent implements OnInit, OnChanges {

  @Input()
  subject: Subject;

  @Input()
  average: number;

  color: string;
  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.average){
      if (this.average >= 5) this.color = 'green';
      else if (this.average >= 4) this.color = 'yellow';
      else this.color = 'red';
    }
  }
}
