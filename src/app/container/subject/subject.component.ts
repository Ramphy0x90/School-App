import { Component, OnInit } from '@angular/core';
import { Subject } from '../../mock/subject';
import {DatabaseService} from '../../service/database.service';
import {ModalController} from '@ionic/angular';
import {SubjectModalComponent} from '../../component/subject-modal/subject-modal.component';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  subjects: Subject[];
  onEdit: boolean = false;

  constructor(private databaseService: DatabaseService, private modalController: ModalController) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.subjects = this.databaseService.getAllSubjects();
  }

  changeStatus(){
    this.onEdit = !this.onEdit;
  }

  deleteSubject(id){
    this.databaseService.deleteSubject(id);
  }

  public async presentModal() {
    const modal = await this.modalController.create({
      component: SubjectModalComponent,
      cssClass: 'modal',
      componentProps: {}
    });

    await modal.present();
  }
}
