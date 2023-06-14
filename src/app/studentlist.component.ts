import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { StudentBean } from './app.component.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'student-list',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./app.component.css']
})
export class StudentListComponent implements OnInit {
  title = 'angular-poc';

  selectedStudent: StudentBean;

  students: StudentBean[];
  
  constructor( private appService: AppService, private router: Router) { }

  ngOnInit() {
    
    this.appService.getStudents()
      .subscribe((data: any) => {
        this.students = data;
        console.log('events are', this.students);
        //this.alertFunctionEvnt(new Date(this.events[0].eventStartDate) < new Date(Date.now()));
      });
  }

  editStudent(studentId: number){
    this.router.navigate(['editStudent/', studentId]);

  }

  createStudent(){
    this.router.navigate(['editStudent/', '-1']);
  }
  deleteStudent(studentId: number){
    this.appService.deleteStudent(studentId).subscribe((data: any) => {
        this.appService.getStudents()
            .subscribe((data: any) => {
            this.students = data;
        
            });
      });
  }

  loadChild(student: StudentBean){
    this.selectedStudent = student;
  }




  updateStudent(student: StudentBean){
    this.appService.updateStudent(student).subscribe((data: any) => {
        console.log("---  "+data);
        this.appService.getStudents()
            .subscribe((data: any) => {
            this.students = data;
        
            });
      });

  }

}
