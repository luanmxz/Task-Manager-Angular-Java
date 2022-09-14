import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports: [CommonModule, TasksRoutingModule, MatDialogModule],
  declarations: [TasksComponent],
  providers: []
})
export class TasksModule {}

//modulo criado para realizar o lazy loading
