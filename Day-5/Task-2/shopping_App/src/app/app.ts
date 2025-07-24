import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductDetails } from '../models/shoppingCards';
import { CurrencyPipe } from '@angular/common';
import { RatingStarsPipe } from './rating-stars-pipe';
import { RatingcomponentPipe } from './ratingcomponent-pipe';
import { RatingComponent } from './rating-component/rating-component';
import { NavBar } from './nav-bar/nav-bar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shopping_App');

 }
