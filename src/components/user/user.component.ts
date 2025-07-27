import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
// const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length)

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({required: true}) user!: User
  @Output() select =  new EventEmitter();
  // selectedUser = DUMMY_USERS[randonIndex];
  get imagePath() {
    return 'assets/users/' + this.user.avatar; // Fixed path
  }
  onSelectUser() {
    this.select.emit({
      id: this.user.id,
      name: this.user.name,
      avatar: this.user.avatar
    });
    // console.log('User selected:', this.selectedUser);  
  
  }
  
}
