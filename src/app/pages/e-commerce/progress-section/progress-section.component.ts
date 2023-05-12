import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../../../person.service';

@Component({
  selector: 'ngx-progress-section',
  styleUrls: ['./progress-section.component.scss'],
  templateUrl: './progress-section.component.html',
})
export class ECommerceProgressSectionComponent implements OnInit {
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  fourthForm: FormGroup;
  fifthForm: FormGroup;
  ajouter=false;
  SoapData: any;
  person: any;
  personSave: any ={"personType": "" ,"policyNumber": "","firstName": "","lastName": "","nationality": ""};
  id='PP-2';

  constructor(private fb: FormBuilder,private router: Router,private personService: PersonService) {
  }
  getPerson() {
    this.personService.getPerson(this.id)
     .subscribe(person => {
      this.person = person;
    });
  }
  addPerson() {
    this.personService.addPerson(this.personSave).subscribe(
      {
        next: (data: any) => {},
        error: (err:any) => {console.log(err) },
        complete: () => { console.log('success')}
      }

    );

  }
  ngOnInit() {

    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });

    this.fourthForm = this.fb.group({
      fourthCtrl: ['', Validators.required],
    });
    
    this.fifthForm = this.fb.group({
      fifthCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

    onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }
    onfourthSubmit() {
    this.fourthForm.markAsDirty();

  } 
    onfifthSubmit() {
    this.fifthForm.markAsDirty();
  }
}
