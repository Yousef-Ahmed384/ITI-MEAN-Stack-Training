import { Component, Input, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoForm } from './todo-form/todo-form';
import { TodoList } from './todo-list/todo-list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, TodoForm, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Todo-App');
  todo = "1st task"
    receivedData = '';

  handleData(data: string) {
    this.receivedData = data;
  }

}
