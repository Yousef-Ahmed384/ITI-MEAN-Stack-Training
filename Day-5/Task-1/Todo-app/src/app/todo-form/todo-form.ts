import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.html',
  template: `
  <!-- <input type="text" [(ngModel)]="inputData" placeholder="Enter data"> -->
    <button (click)="addData()">Add</button>
    `, 
  styleUrl: './todo-form.css'
})
export class TodoForm {
  @Input() inputData: string | undefined 

  @Output() messageToParent = new EventEmitter<string>()

  sendMessage(inputData : string){
    this.messageToParent.emit(this.inputData)
  }
    

}
