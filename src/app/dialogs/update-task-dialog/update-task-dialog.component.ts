import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/model/Task.model';
import { TaskServiceService } from 'src/app/task-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-task-dialog',
  templateUrl: './update-task-dialog.component.html',
  styleUrls: ['./update-task-dialog.component.css'],
})
export class UpdateTaskDialogComponent implements OnInit {
  categorias: string[] = ["Pessoal", "Estudo", "Trabalho"];

  constructor(
    //injetando dados na abertura do dialog
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private taskService: TaskServiceService,
    private formBuilder: FormBuilder
  ) {}

  updateForm!: FormGroup;

  ngOnInit(): void {
    //formulário para update da task
    this.updateForm = this.formBuilder.group({
      categoria: [
        `${this.data.categoria}`,
        [Validators.required],
      ],
      tarefa: [
        `${this.data.tarefa}`,
        [Validators.required, Validators.maxLength(30)],
      ],
      detalhes: [`${this.data.detalhes}`, [Validators.maxLength(255)]],
      prazo: [new Date(), [Validators.required]],
    });
  }

  //chamando método update do taskService
  updateById(task: Task) {
    this.taskService.updateById(this.data.id, task).subscribe();
  }
}
