import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input() name!: string;
  @Input() userIds!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'This is the first task.',
      dueDate: '2025-7-25'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Task 2',
      summary: 'This is the second task.',
      dueDate: '2025-7-26'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Task 3',
      summary: 'This is the third task.',
      dueDate: '2025-7-27'
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Task 4',
      summary: 'This is the fourth task.',
      dueDate: '2025-7-28'
    }
  ]
  get selectedUSerTasks() {
    return this.tasks.filter(task => task.userId === this.userIds);
  }
  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
