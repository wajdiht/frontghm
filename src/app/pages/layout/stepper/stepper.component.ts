import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../../../person.service';

@Component({
  selector: 'ngx-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  ajouterAddress = false;
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  Adresses: any= [];
  constructor(private fb: FormBuilder,private personservice:PersonService) {
  }

  getAdressrequest() {
    this.personservice.getAdressrequest().subscribe(Adresses =>{
      this.Adresses=Adresses;
      console.log(Adresses)
    });
  }


  ngOnInit() {
  this.getAdressrequest();
}
}
