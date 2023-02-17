import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [];

  constructor() {}

  addStudent(student: Student) {
    this.students.push(student);
  }

  getStudents() {
    return this.students;
  }
}
