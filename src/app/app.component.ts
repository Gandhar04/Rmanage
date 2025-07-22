import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { UserComponent } from '../components/user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { TasksComponent } from "../components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rmanage';
  selectedUserName: string = ''
  users = DUMMY_USERS;
  onSelectUser(id: { name: string }) {
    console.log(id);
    this.selectedUserName = id.name;
  }
}
