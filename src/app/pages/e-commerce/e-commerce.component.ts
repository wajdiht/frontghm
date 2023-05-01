import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ECommerceLegendChartComponent } from './legend-chart/legend-chart.component';
@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  showEarningCardComponent=false;
  
  constructor(private router: Router ) {
  }

  toggleshowEarningCardComponent():void {
    this.showEarningCardComponent = !this.showEarningCardComponent;
  }

}
