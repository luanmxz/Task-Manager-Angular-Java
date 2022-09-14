import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { NewTaskDialogComponent } from './dialogs/new-task-dialog/new-task-dialog.component';
import { UpdateTaskDialogComponent } from './dialogs/update-task-dialog/update-task-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DeleteTaskDialogComponent } from './dialogs/delete-task-dialog/delete-task-dialog.component';
import { DetailsTaskDialogComponent } from './dialogs/details-task-dialog/details-task-dialog.component';
import { SharedService } from './shared-services.service';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [	
    AppComponent,
    NavbarComponent,
    NewTaskDialogComponent,
    UpdateTaskDialogComponent,
    DeleteTaskDialogComponent,
    DetailsTaskDialogComponent,
   ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
