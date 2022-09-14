import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/model/Task.model';
import { TaskServiceService } from 'src/app/task-service.service';

@Component({
  selector: 'app-details-task-dialog',
  templateUrl: './details-task-dialog.component.html',
  styleUrls: ['./details-task-dialog.component.css']
})
export class DetailsTaskDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private taskService: TaskServiceService
  ) { }

  ngOnInit() {
  }

}
