import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared-services.service';
import { Task } from '../../model/Task.model';
import { TaskServiceService } from '../../task-service.service';

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrls: ['./new-task-dialog.component.css'],
})
export class NewTaskDialogComponent implements OnInit {
  categorias: string[] = ["Pessoal", "Estudo", "Trabalho"];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private taskService: TaskServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
    private sharedService: SharedService
  ) {}

  saveForm!: FormGroup;

  ngOnInit(): void {
    //formulário para update da task
    this.saveForm = this.formBuilder.group({
      categoria: ['', Validators.required],
      tarefa: [
        '',
        [Validators.required, Validators.maxLength(40)],
      ],
      detalhes: ['', [Validators.maxLength(255)]],
      prazo: [new Date(), [Validators.required]],
    });
  }

  save(task: Task) {
    this.taskService
      .save({
        categoria: task.categoria,
        tarefa: task.tarefa,
        detalhes: task.detalhes,
        status: false,
        prazo: task.prazo,
      })
      .subscribe(() =>this.sharedService.emitChange({
        categoria: task.categoria,
        tarefa: task.tarefa,
        detalhes: task.detalhes,
        status: false,
        prazo: task.prazo,}));
  }
}
