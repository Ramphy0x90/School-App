import { Injectable } from '@angular/core';
import { SUBJECTS, Subject } from "../mock/subject";
import { GRADES, Grade } from "../mock/grade";
import {Homework, HOMEWORKS} from "../mock/homework";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  public getAllSubjects(){
    return SUBJECTS;
  }

  public getSubjectAverage(id) {
    let grades = GRADES.filter(g => g.subjectRed == id);
    let sum = 0;
    let test = 0;
    grades.forEach(g => {sum += g.mark*g.score; test += g.score});
    return sum/test;
  }

  public getSubjectMark(id){
    return GRADES.filter(g => g.subjectRed == id);
  }
  public getAllAverage() {
    let sum = 0;
    for (let i = 0; i < SUBJECTS.length; i++) {
      sum += this.getSubjectAverage(SUBJECTS[i].id);
    }

    return sum/SUBJECTS.length;
  }

  public getSubject(id){
    return SUBJECTS.filter(s => s.id == id)[0];

  }

  public insertGrade(grade: Grade){
    grade.id = GRADES.length > 0 ? GRADES[GRADES.length-1].id + 1 : 0;
    GRADES.push(grade);
  }

  public getHomeworks(){
    return HOMEWORKS.filter(h => h.dayDate >= new Date())
  }

  public insertHomework(homework: Homework){
    homework.id = HOMEWORKS.length > 0 ? HOMEWORKS[HOMEWORKS.length-1].id + 1 : 0;
    HOMEWORKS.push(homework);
  }

  public updateHomework(homework: Homework){
    let current = HOMEWORKS.filter(h => h.id == homework.id)[0];
    current.title = homework.title;
    current.description = homework.description;
    current.subjectRef = homework.subjectRef;
    current.dayDate = homework.dayDate;
  }
}
