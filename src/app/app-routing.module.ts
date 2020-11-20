import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {GradesComponent} from "./container/grades/grades.component";
import {SubjectDetailComponent} from "./component/subject-detail/subject-detail.component";
import {LoginComponent} from './container/login/login.component';
import {HomeworkComponent} from "./container/homework/homework.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'grades', component: GradesComponent},
  { path: 'detail/:id', component: SubjectDetailComponent},
  { path: 'homeworks', component: HomeworkComponent },
  /*{ path: 'subject', children: [
      { path: 'modify/:id'},
      { path: 'new'}
    ]},
  { path: 'school'}*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
