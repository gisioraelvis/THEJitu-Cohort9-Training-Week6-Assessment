import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  students: Student[] = [];
  newStudent: Student = {
    id: 0,
    name: '',
    balance: 0,
  };

  constructor(private studentService: StudentService) {}

  onSubmit(form: NgForm) {
    const newStudent: Student = {
      id: this.students.length + 1,
      name: form.value.name,
      balance: form.value.balance,
    };
    this.students.push(newStudent);
    this.studentService.addStudent(newStudent);
    form.reset();
  }

  getStudentsWithBalance() {
    return this.students.filter((student) => student.balance > 0);
  }

  getStudentsWithoutBalance() {
    return this.students.filter((student) => student.balance === 0);
  }

  updateStudentBalance(student: Student, amount: number) {
    const index = this.students.indexOf(student);
    this.students[index].balance += amount;
  }
}
