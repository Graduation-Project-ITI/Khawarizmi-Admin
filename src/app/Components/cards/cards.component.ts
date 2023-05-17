import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  visitors: number | null = 5000;
  courses: number | null = 60;
  creators: number | null = 25;

  
}
