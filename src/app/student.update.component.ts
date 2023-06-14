import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { StudentBean } from './app.component.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'student-update',
  templateUrl: './student.update.component.html',
  styleUrls: ['./app.component.css']
})
export class StudentUpdateComponent implements OnInit {
  title = 'angular-poc';

  student: StudentBean = new StudentBean();
  studentId: string;
  create: boolean = true;
  constructor( private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.studentId = this.route.snapshot.paramMap.get('studentId')!;
    if(this.studentId != '-1'){
    this.create = false;
    this.appService.getStudent(this.studentId).subscribe((data: any) => {
        this.student = data;
        console.log('student are', this.student);
      });
    }
    
  }

  updateStudent(){
    this.appService.updateStudent(this.student).subscribe((data: any) => {
        console.log("---  "+data);
        this.router.navigateByUrl('/');
      });

  }

  createStudent(){
    this.appService.createStudent(this.student).subscribe((data: any) => {
        console.log("---  "+data);
        this.router.navigateByUrl('/');
      });

  }
}