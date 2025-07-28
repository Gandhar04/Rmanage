import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required:true}) task!: Task;
  @Output() onRemove = new EventEmitter();

  onRemoveTask() {
    this.onRemove.emit(this.task.id);
  }
}
