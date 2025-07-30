import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoForm } from '../todo-form/todo-form';
import { Todo } from '../app';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, TodoForm, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  @Input() element !: string


}
