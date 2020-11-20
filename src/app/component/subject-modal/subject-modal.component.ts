import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {DatabaseService} from '../../service/database.service';
import {Subject} from '../../mock/subject';

@Component({
  selector: 'app-subject-modal',
  templateUrl: './subject-modal.component.html',
  styleUrls: ['./subject-modal.component.scss'],
})
export class SubjectModalComponent implements OnInit {
  @Input()
  nome: string;

  constructor(private databaseService: DatabaseService, private modalController: ModalController) { }

  ngOnInit() {}

  insertData(nome){
    let subject: Subject = new Subject();
    subject.name = nome;

    this.databaseService.insertSubject(subject);
  }

  dismiss(){
    this.insertData(this.nome);
    this.modalController.dismiss({
      'dismissed': true
    });

    console.log(this.databaseService.getAllSubjects())
  }
}
