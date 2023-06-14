import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { AppService } from './app.service';
import { StudentBean } from './app.component.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'child-update',
  templateUrl: './child.update.component.html',
  styleUrls: ['./app.component.css']
})
export class ChildUpdateComponent implements OnInit {
  title = 'angular-poc';

  //student: StudentBean = new StudentBean();
  @Input() studentt: StudentBean;
  @Output() studentChange:EventEmitter<StudentBean> =new EventEmitter<StudentBean>();
  
  constructor( private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.studentt = new StudentBean(); 
    
    }
    
  

  updateStudent(){
    this.studentChange.emit(this.studentt);
    this.studentt = new StudentBean();

  }
}