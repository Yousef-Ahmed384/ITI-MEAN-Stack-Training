import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.html',
  template: `
  <input type="text" [(ngModel)]="inputData" placeholder="Enter data">
    <button (click)="addData()">Add</button>
    `, 
  styleUrl: './todo-form.css'
})
export class TodoForm {
    @Output() dataAdded = new EventEmitter<string>();
  inputData: string = '';

  addData() {
    if (this.inputData.trim()) {
      this.dataAdded.emit(this.inputData);
      this.inputData = ''; // Clear the input after adding
    }
  }

}
