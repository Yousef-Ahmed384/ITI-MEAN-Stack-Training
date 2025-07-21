import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoForm } from './todo-form/todo-form';
import { TodoList } from './todo-list/todo-list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
    standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule, TodoForm, TodoList],
  templateUrl: './app.html',
  template: `
  <app-todo-form (dataAdded)="onDataAdded($event)"></app-todo-form>
<app-todo-list [receivedData] = "sharedData"></app-todo-list>
  `,
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('Todo-App');
  sharedData: string = '';

  onDataAdded(data: string) {
    this.sharedData = data;
  }
}
