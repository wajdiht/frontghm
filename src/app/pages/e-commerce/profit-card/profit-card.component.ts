import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../../../person.service';
@Component({
  selector: 'ngx-profit-card',
  styleUrls: ['./profit-card.component.scss'],
  templateUrl: './profit-card.component.html',
})
export class ProfitCardComponent {
  contracts:  any[];
  nameFilter: string;
  adhesionNumberFilter: string;
  policeFiltre: string;
  statueFiltre:string;
  dateeFiltre:Date;
  filteredcontracts: any[];
  filteredcontract:any[];
  c :any[] ;
  constructor( private fb: FormBuilder,private router: Router,private personService: PersonService) {
    // this.contracts=this.getcontracts()
    // this.contracts;
    this.filteredcontracts = this.filteredContracts()
  }
  getcontracts() {
    this.personService.getcontracts()
     .subscribe(contracts => {
      this.contracts = contracts;
     // console.loog('contracts: ', this.filteredcontracts)
    });

  }
setOriginalData(){
}
  filteredContracts (){
   //let filteredcontracts: any = this.filteredcontracts;
     let contract: any
      this.getcontracts()




  if (this.nameFilter) {
       this.filteredcontracts = this.contracts.filter(contract => contract.fullName.toLowerCase().includes(this.nameFilter.toLowerCase()));
        console.log('filter: ',  this.filteredcontracts)
        console.log('liste: ', this.contracts)  
        return   this.filteredcontracts
    }
    //   filterProducts() {
    //     let filtered = this.contracts;
    
    //     if (this.nameFilter) {
    //       filtered = filtered.filter(contract => contract.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1);
  //      }
    
    //     this.filteredProducts = filtered;
    //   }
    // }
  }
  }

