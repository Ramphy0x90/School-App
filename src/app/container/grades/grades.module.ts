import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradesComponent } from './grades.component';
import {SubjectAvgComponent} from "../../component/subject-avg/subject-avg.component";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import {SubjectDetailComponent} from "../../component/subject-detail/subject-detail.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [GradesComponent, SubjectAvgComponent, SubjectDetailComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FormsModule
    ]
})
export class GradesModule { }
