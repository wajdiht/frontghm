import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../../../person.service';

@Component({
  selector: 'ngx-security-cameras',
  styleUrls: ['./security-cameras.component.scss'],
  templateUrl: './security-cameras.component.html',
})
export class SecurityCamerasComponent    {
  ajouterAddress = false;
  ajouterContact = false;
  ajouterRib = false;
  BankAccount :any ={ "orderNumber": "", "bankName": "", "ribNumber": "","currency": "", "agency": "", "windowNumber":"" ,"ribKey": "", "ribType": "", "accountNumber":"","locality": "","agencyAddress": "" }
  contact : any={ "email": "", "mobilePhoneNumber": "", "landlineNumber": "" }
  address: any ={ "street": "", "city": "", "state": "", "zip": "" }
  personId = localStorage.getItem('personId');
  Member :any ={ "membershipCodeNumber": "", "membershipDate": "", "membershipExpiryDate": "","parentCompany": "", "subscriptionDate": "", "mainContact":"" ,"patterns": "", "isVIP": "" }
  personSave: any = { "personType": "MORAL_PERSON", "policyNumber": "", "firstName": "", "lastName": "", "nationality": "","identityDocumentNumber": "", "identityDocumentIssueDate": "", "identityDocumentType": "", "dateOfBirth": "", "civilStatus": "","vitalStatus": "", "cityOfBirth": "", "maidenName": "","gender": "", "countryOfBirth":"", "stateOfBirth": "", "effectiveDate": "", "isResident": "" };
  constructor(private fb: FormBuilder,private router: Router, private PersonService: PersonService) {
  }
addPerson() {
    this.PersonService.addPerson(this.personSave).subscribe((newPersonID) => {
      localStorage.setItem('personId',newPersonID );
      this.personId=newPersonID
      console.log(newPersonID);     
});
}
addAddress() {
  console.log(this.personId , this.address)
    this.PersonService.addAddress(this.personId,this.address).subscribe(() => {
    console.log('Address added successfully.');
});
}
addContact() {
  console.log(this.personId , this.contact)
    this.PersonService.addContact(this.personId,this.contact).subscribe(() => {
    console.log('Contact added successfully.');
});
}
addRib() {
  console.log(this.personId , this.BankAccount)
    this.PersonService.addBankAccount(this.personId,this.BankAccount).subscribe(() => {
    console.log('Rib added successfully.');
    window.location.reload();
    localStorage.clear;
});
}



  }

