import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartTasksRoutingModule } from './chart-tasks-routing.module';
import { ChartTasksComponent } from './chart-tasks.component';

@NgModule({
  imports: [CommonModule, ChartTasksRoutingModule],
  declarations: [ChartTasksComponent],
  providers: [],
})
export class ChartTasksModule {}
