import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentUpdateComponent } from './student.update.component';
import { StudentListComponent } from './studentlist.component';

const routes: Routes = [

  {
    path:  '',
   component:  StudentListComponent
   },

  {
    path:  'editStudent/:studentId',
   component:  StudentUpdateComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
