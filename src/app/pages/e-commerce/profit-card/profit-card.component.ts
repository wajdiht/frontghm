import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-profit-card',
  styleUrls: ['./profit-card.component.scss'],
  templateUrl: './profit-card.component.html',
})
export class ProfitCardComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  constructor(private router: Router ) {
    
  }
  rediriger() {
    this.router.navigateByUrl('/legend-chart');
  }
}

