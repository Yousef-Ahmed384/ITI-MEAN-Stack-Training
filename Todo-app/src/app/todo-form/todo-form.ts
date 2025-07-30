import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css'
})
export class TodoForm {
  childInput = '';

  @Output() dataEmitter = new EventEmitter<string>();

  sendData() {
    this.dataEmitter.emit(this.childInput);
  }
}
