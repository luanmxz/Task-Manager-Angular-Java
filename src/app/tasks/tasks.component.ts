import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task.model';
import { TaskServiceService } from '../task-service.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTaskDialogComponent } from '../dialogs/update-task-dialog/update-task-dialog.component';
import { DeleteTaskDialogComponent } from '../dialogs/delete-task-dialog/delete-task-dialog.component';
import { DetailsTaskDialogComponent } from '../dialogs/details-task-dialog/details-task-dialog.component';
import { SharedService } from '../shared-services.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  status: boolean = false;
  category: string = 'All';

  constructor(
    private dialog: MatDialog,
    private taskService: TaskServiceService,
    private sharedService: SharedService
  ) {
    sharedService.changeEmitted$.subscribe((task: Task) => {
      if (task.categoria == this.category || !this.status) {
        this.tasks.push(task);
      }
      if (this.status) {
        this.filteredTasks.push(task);
      }
    });
  }

  ngOnInit(): void {
    this.taskService
      .getAll()
      .subscribe(
        (task: Task[]) =>
          (this.tasks = task.filter(
            (item) => item.status == false,
            (this.filteredTasks = task.filter((item) => item.status == false))
          ))
      );
  }

  deleteDialog(task: Task) {
    this.dialog
      .open(DeleteTaskDialogComponent, {
        data: {
          id: task.id,
          categoria: task.categoria,
          tarefa: task.tarefa,
          detalhes: task.detalhes,
          status: task.status,
          prazo: task.prazo,
        },
        maxWidth: '100%',
        minWidth: '30%',
      })
      .afterClosed()
      .subscribe(() =>
        this.taskService.getAll().subscribe((task: Task[]) => {
          (this.tasks = task.filter((item) => item.status == false)),
            (this.filteredTasks = task.filter((item) => !item.status));
        })
      );
  }

  updateDialog(task: Task) {
    this.dialog
      .open(UpdateTaskDialogComponent, {
        data: {
          id: task.id,
          categoria: task.categoria,
          tarefa: task.tarefa,
          detalhes: task.detalhes,
          status: task.status,
          prazo: task.prazo,
        },
        maxWidth: '100%',
        minWidth: '60%',
        maxHeight: '80%',
      })
      .afterClosed()
      .subscribe(() =>
        this.taskService.getAll().subscribe((task: Task[]) => {
          this.tasks = task.filter((item) => item.status == false);
        })
      );
  }

  detailsDialog(task: Task) {
    this.dialog
      .open(DetailsTaskDialogComponent, {
        data: {
          id: task.id,
          categoria: task.categoria,
          tarefa: task.tarefa,
          detalhes: task.detalhes,
          status: task.status,
          prazo: task.prazo,
        },
        maxWidth: '100%',
        minWidth: '70%',
      })
      .afterClosed()
      .subscribe(() =>
        this.taskService
          .getAll()
          .subscribe(
            (task: Task[]) =>
              (this.tasks = task.filter((item) => item.status == false))
          )
      );
  }

  completedTheTask(task: Task) {
    this.taskService.completedTheTask(task).subscribe(() =>
      this.taskService.getAll().subscribe((task: Task[]) => {
        this.tasks = task.filter((item) => item.status == false);
      })
    );
  }

  filter(categoryFilter: string, status: boolean) {
    if (!this.status) {
      this.status = status;
      this.category = categoryFilter;
      this.tasks = this.tasks.filter(
        (task) => task.categoria == categoryFilter
      );
    } else if (this.status && categoryFilter === this.category) {
      this.tasks = this.filteredTasks;
      this.status = false;
      this.category = 'All';
    } else if (this.status && categoryFilter != this.category) {
      this.tasks = this.filteredTasks.filter(
        (task) => task.categoria == categoryFilter
      );
      this.category = categoryFilter;
    }
  }
}
