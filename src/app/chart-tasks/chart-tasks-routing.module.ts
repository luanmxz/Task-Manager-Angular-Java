import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartTasksComponent } from './chart-tasks.component';

const routes: Routes = [{ path: '', component: ChartTasksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartTasksRoutingModule {}
