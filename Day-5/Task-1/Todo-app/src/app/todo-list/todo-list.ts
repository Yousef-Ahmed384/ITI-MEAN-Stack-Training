import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-list',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  template: `
    <p>Received Data: {{ receivedData }}</p>
    `,
  styleUrl: './todo-list.css'
})
export class TodoList {
  @Input() messageFromParent!: string;

}
