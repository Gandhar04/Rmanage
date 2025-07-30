import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../task/task.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Input() showModal!: boolean;
  @Output() onCancel = new EventEmitter();
  @Output() onAdd = new EventEmitter<{ title: string; summary: string; dueDate: string;}>();
  enteredTitle = '';
  enterdedSummary = '';
  enteredDueDate = '';

  onCancelTask() {
    this.onCancel.emit();
  }

  onSubmit() {
    this.onAdd.emit({
      title: this.enteredTitle,
      summary: this.enterdedSummary,
      dueDate: this.enteredDueDate
  })
}
}
