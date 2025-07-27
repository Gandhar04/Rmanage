import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { UserComponent } from '../components/user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { TasksComponent } from "../components/tasks/tasks.component";
import { NgFor } from '@angular/common';
NgFor
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rmanage';
  selectedUserName: { id: string, name: string, avatar: string } | null = null;
  users = DUMMY_USERS;
  
  onSelectUser(id: { id: string, name: string, avatar: string }) {
    console.log(id);
    this.selectedUserName = id;
  }
}
