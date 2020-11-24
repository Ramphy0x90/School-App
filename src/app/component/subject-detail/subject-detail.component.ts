import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "../../mock/subject";
import {DatabaseService} from "../../service/database.service";
import {Grade} from "../../mock/grade";
import {ModalController} from '@ionic/angular';
import {GradesModalComponent} from '../grades-modal/grades-modal.component';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss'],
})
export class SubjectDetailComponent implements OnInit {

  class: string;
  average: number;
  subject: Subject;
  grades: Grade[];
  newGrade: Grade = new Grade();
  constructor(private router: Router, private route: ActivatedRoute, private databaseService: DatabaseService, private modalController: ModalController) { }

  ngOnInit() {
    this.getData();
  }

  goBack(){
    this.router.navigate(['/grades']);
  }

  add(grade){
    this.databaseService.insertGrade(grade);
  }

  getData(){
    this.route.paramMap.subscribe(p => {
      this.subject = this.databaseService.getSubject(p.get('id'));
      this.grades = this.databaseService.getSubjectMark(p.get('id'));
      this.newGrade.subjectRed = Number(p.get('id'));
      this.average = this.databaseService.getSubjectAverage(p.get('id'));
      this.class = this.average < 4 ? 'red' : this.average >=5 ? 'green' : 'yellow';
    });
  }

  public async presentModal() {
    const modal = await this.modalController.create({
      component: GradesModalComponent,
      cssClass: 'modal',
      componentProps: {
        'grade': this.newGrade
      },
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.add(data.grade);
    this.getData();
  }
}
