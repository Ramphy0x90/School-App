import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubjectComponent} from './subject.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [SubjectComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
  ]
})
export class SubjectModule { }
