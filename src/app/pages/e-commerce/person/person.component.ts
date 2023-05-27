import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../person.service';
import { Person } from '../../../models/person/person';
import { ActivatedRoute } from '@angular/router';
import { Contract } from '../../../models/contract/contract';

@Component({
  selector: 'ngx-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  Person: Person | undefined;
  effectiveDate:any;
  dateOfBirth:any;
  contract: Contract | undefined;
  personid:any;
  modifier = false;
  Contractid: any;
  identityDocumentIssueDate:any
  //  Person: any = { "personType": "", "policyNumber": "", "firstName": "", "lastName": "", "nationality": "",
  //   "identityDocumentNumber": "", "identityDocumentIssueDate": "", "identityDocumentType": "",
  //    "dateOfBirth": "","civilStatus":"", "vitalStatus": "", "cityOfBirth": "", "gender": "",
  //     "countryOfBirth": "","stateOfBirth":"","effectiveDate":"","isResident":""}
  constructor(private personserv: PersonService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.Contractid = params["id"];
      
      this.getcontractsbyid();
      setTimeout(() => {
        this.getPerson();
      }, 2200); // Delay of 2000 milliseconds (2 seconds)
    });
  }
  removeTimeZoneOffset(date: Date): Date {
    const dateString = date.toLocaleString();
    const dateWithoutOffset = dateString.substring(0, dateString.indexOf('+'));
    return new Date(dateWithoutOffset);
  }
  getPerson() {
    console.log(this.personid)
    this.personserv.getPerson(this.personid).subscribe(data => {
      this.Person = data;
      this.effectiveDate = data.effectiveDate
      this.dateOfBirth = data.dateOfBirth
      this.identityDocumentIssueDate = data.identityDocumentIssueDate
      console.log(data.identityDocumentIssueDate)
      console.log(this.identityDocumentIssueDate)
    });
  }
  getcontractsbyid() {
    this.personserv.getcontractsbyid(this.Contractid).subscribe({
      next: (response) => {
        this.contract = response;
        console.log("contract", this.contract);
        this.personid = this.contract.member.id;
        console.log(" id ", this.personid);
      },
      error: (error) => {
      }}
    )}

  UpdatePerson() {
      this.personserv.UpdatePerson(this.personid, this.Person, this.identityDocumentIssueDate, this.dateOfBirth,this.effectiveDate).subscribe({
        next: (data: any) => { },
        error: (err: any) => { },
        complete: () => { console.log('success prof update') }
      });
    }


/*      formatDates(dateString: string): string {
      const dateRegex = /^\d{4}-\d{2}-\d{2}/;
      const extractedDate = dateString.match(dateRegex);
    
      if (extractedDate) {
        return extractedDate[0];
      }
    
      return 'Invalid Date';
    } */



    formatDates(date: any): string {
      if (date instanceof Date && !isNaN(date.getTime())) {
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      } else if (typeof date === 'string') {
        const isoString = date.split('+')[0];
        const dateObj = new Date(isoString);
        if (dateObj instanceof Date && !isNaN(dateObj.getTime())) {
          const year = dateObj.getFullYear().toString();
          const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
          const day = dateObj.getDate().toString().padStart(2, '0');
          return `${year}-${month}-${day}`;
        }
      }
      return 'Invalid Date';
    }
    //  formatDates(dateString: string): string {
    //   const dateRegex = /^\d{4}-\d{2}-\d{2}/;
    //   const extractedDate = dateString.match(dateRegex);
    
    //   if (extractedDate) {
    //     return extractedDate[0];
    //   }
    
    //   return 'Invalid Date';
    // }
     
    formatting():void{
      this.effectiveDate = this.formatDates(this.effectiveDate)
      this.identityDocumentIssueDate = this.formatDates(this.identityDocumentIssueDate)
      this.dateOfBirth = this.formatDates(this.dateOfBirth)
    }
 
    /* formatDates(date: any): string {
      if (date instanceof Date && !isNaN(date.getTime())) {
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      } else if (typeof date === 'string') {
        const dateObj = new Date(date);
        if (dateObj instanceof Date && !isNaN(dateObj.getTime())) {
          const year = dateObj.getFullYear().toString();
          const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
          const day = dateObj.getDate().toString().padStart(2, '0');
          return `${year}-${month}-${day}`;
        }
      }
      return 'Invalid Date';
    } */
}
