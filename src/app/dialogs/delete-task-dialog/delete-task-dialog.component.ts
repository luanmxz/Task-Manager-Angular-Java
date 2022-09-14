import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/model/Task.model';
import { TaskServiceService } from 'src/app/task-service.service';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.css'],
})
export class DeleteTaskDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private taskService: TaskServiceService
  ) {}

  deleteById() {
    this.taskService.deleteById(this.data.id).subscribe();
  }
}
