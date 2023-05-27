import { Component, OnDestroy, ViewChild } from '@angular/core';
import { PersonService } from '../../../person.service';

@Component({
  selector: 'ngx-ecommerce-charts',
  styleUrls: ['./charts-panel.component.scss'],
  templateUrl: './charts-panel.component.html',
})
export class ECommerceChartsPanelComponent  {
  id:any;
  contract: any = [];
  constructor(private personService : PersonService) {
  }
  getcontractbyid() {
    this.personService.findPersonByFullName(this.id)
     .subscribe(contract => {
      this.id=contract.id;
      console.log("contarct with person id fetched",this.id)
      console.log(this.id)
    });
  } 
}
