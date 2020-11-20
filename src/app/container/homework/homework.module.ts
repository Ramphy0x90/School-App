import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeworkComponent} from "./homework.component";
import {HomeworkDetailComponent} from "../../component/homework-detail/homework-detail.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {HomeworkModalComponent} from "../../component/homework-modal/homework-modal.component";



@NgModule({
  declarations: [HomeworkComponent, HomeworkDetailComponent, HomeworkModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class HomeworkModule { }
