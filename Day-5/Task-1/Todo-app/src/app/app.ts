import { Component, Input, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoForm } from './todo-form/todo-form';
import { TodoList } from './todo-list/todo-list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'node:stream';
@Component({
  selector: 'app-root',
    standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule, TodoForm, TodoList],
  templateUrl: './app.html',
  template: `
  <app-todo-form (messageToParent) >showData($event)</app-todo-form>
  <app-todo-list [messageFromParent]>sharedData</app-todo-list>
  `,
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('Todo-App');
  sharedData: string = '';

  showData(data: string) {
    this.sharedData = data
  }

}
