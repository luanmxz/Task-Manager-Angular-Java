import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedTasksRoutingModule } from './completed-tasks-routing.module';
import { CompletedTasksComponent } from './completed-tasks.component';

@NgModule({
  imports: [CommonModule, CompletedTasksRoutingModule],
  declarations: [CompletedTasksComponent],
})
export class CompletedTasksModule {}
