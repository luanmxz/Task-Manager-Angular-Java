import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTaskDialogComponent } from '../dialogs/delete-task-dialog/delete-task-dialog.component';
import { DetailsTaskDialogComponent } from '../dialogs/details-task-dialog/details-task-dialog.component';
import { Task } from '../model/Task.model';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css'],
})
export class CompletedTasksComponent implements OnInit {
  constructor(private dialog: MatDialog,
    private taskService: TaskServiceService) {}

  completedTasks: Task[] = [];
  filteredTasks: Task[] = [];
  status: boolean = false;
  category: string = 'All';

  ngOnInit(): void {
    this.taskService.getAll().subscribe((task: Task[]) => 
      this.completedTasks = task.filter((item) => item.status == true,
      this.filteredTasks = task.filter((item) => item.status == true)));
    };

  deleteDialog(task: Task){
    this.dialog.open(DeleteTaskDialogComponent, {
      data: {
        id: task.id,
        categoria: task.categoria,
        tarefa: task.tarefa,
        detalhes: task.detalhes,
        status: task.status,
        prazo: task.prazo
      }
    }).afterClosed().subscribe(() => {
      this.taskService.getAll().subscribe((task: Task[]) => {
        this.completedTasks = task.filter((item) => item.status == true)
      })
    })
  }

  detailsDialog(task: Task){
    this.dialog.open(DetailsTaskDialogComponent, {
      data: {
        id: task.id,
        categoria: task.categoria,
        tarefa: task.tarefa,
        detalhes: task.detalhes,
        status: task.status,
        prazo: task.prazo
      }, maxWidth: '100%',
      minWidth: '50%',
    })
  }

  filter(categoryFilter: string, status: boolean){
    if(!this.status){
      this.status = status;
      this.category = categoryFilter;
      this.completedTasks = this.completedTasks.filter((task) => task.categoria == categoryFilter);
    } else if(this.status && categoryFilter === this.category) {
      this.completedTasks = this.filteredTasks;
      this.status = false;
      this.category = 'All';
    } else if(this.status && categoryFilter != this.category){
      this.completedTasks = this.filteredTasks.filter((task) => task.categoria == categoryFilter);
      this.category = categoryFilter;
    }
}
}
