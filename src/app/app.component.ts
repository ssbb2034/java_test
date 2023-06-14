import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { StudentBean } from './app.component.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-poc';

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

  updateStudent(studentId: number){
    this.router.navigate(['editStudent/', studentId]);

  }
  deleteStudent(studentId: number){
    
  }
}
