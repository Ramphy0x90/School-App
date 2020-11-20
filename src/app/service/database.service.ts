import { Injectable } from '@angular/core';
import { SUBJECTS, Subject } from "../mock/subject";
import { GRADES, Grade } from "../mock/grade";
import {HOMEWORKS} from "../mock/homework";

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

  getSubjectMark(id){
    return GRADES.filter(g => g.subjectRed == id);
  }
  getAllAverage() {
    let sum = 0;
    for (let i = 0; i < SUBJECTS.length; i++) {
      sum += this.getSubjectAverage(SUBJECTS[i].id);
    }

    return sum/SUBJECTS.length;
  }

  getSubject(id){
    return SUBJECTS.filter(s => s.id == id)[0];

  }

  insertGrade(grade: Grade){
    GRADES.push(grade);
  }

  getHomeworks(){
    return HOMEWORKS.filter(h => h.dayDate >= new Date())
  }
}
