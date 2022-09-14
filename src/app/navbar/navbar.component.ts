import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { NewTaskDialogComponent } from '../dialogs/new-task-dialog/new-task-dialog.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private router: Router) {}

  ngOnInit(): void {}

  addTask(){
    this.dialog.open(NewTaskDialogComponent, {
      maxWidth: '100%',
      minWidth: '60%',
      maxHeight: '80%',
    }).afterClosed().subscribe(() => this.router.navigateByUrl('tasks'));
  }
}
