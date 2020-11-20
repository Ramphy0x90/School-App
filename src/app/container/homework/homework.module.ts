import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeworkComponent} from "./homework.component";
import {HomeworkDetailComponent} from "../../component/homework-detail/homework-detail.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [HomeworkComponent, HomeworkDetailComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class HomeworkModule { }
