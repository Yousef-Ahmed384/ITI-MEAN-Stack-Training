import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cards } from './cards/cards';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Cards, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('user-cards');
}
