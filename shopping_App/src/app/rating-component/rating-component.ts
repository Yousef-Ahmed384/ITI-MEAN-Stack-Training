import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RatingStarsPipe } from '../rating-stars-pipe';

@Component({
  selector: 'app-rating-component',
  imports: [RatingComponent, RatingStarsPipe],
  templateUrl: './rating-component.html',
  styleUrl: './rating-component.css'
})
export class RatingComponent {
    @Input() receivedRating:number | undefined 
    
  @Output() messageToParent=new EventEmitter<string>()

  sendMessage(){
    this.messageToParent.emit(`the clicked rating is ${this.receivedRating}`)
  }

 ngOnChanges(): void {
     console.log(`value changed ${this.receivedRating}`);
     
 }
}
