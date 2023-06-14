import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentUpdateComponent } from './student.update.component';
import { AppService } from './app.service';
import { StudentListComponent } from './studentlist.component';
import { ChildUpdateComponent } from './child.update.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentUpdateComponent,
    StudentListComponent,
    ChildUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
