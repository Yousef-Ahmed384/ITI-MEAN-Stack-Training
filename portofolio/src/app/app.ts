import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Skills } from './skills/skills';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { AboutMe } from './about-me/about-me';
import { Porfolio } from './porfolio/porfolio';

@Component({
  selector: 'app-root',
  imports: [Header, AboutMe, Porfolio, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
