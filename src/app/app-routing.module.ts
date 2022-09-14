import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    //realizando o lazy loading
    loadChildren: () =>
      import('./tasks/tasks.module').then((m) => m.TasksModule),
  },
  {
    path: 'completed-tasks',
    //realizando o lazy loading
    loadChildren: () =>
      import('./completed-tasks/completed-tasks.module').then(
        (m) => m.CompletedTasksModule
      ),
  },
  {
    path: 'chart-tasks',
    //realizando o lazy loading
    loadChildren: () =>
      import('./chart-tasks/chart-tasks.module').then(
        (m) => m.ChartTasksModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
