
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MySoapService } from '../../../my-soap-service.service';
import { PersonService } from '../../../person.service';


@Component({
  selector: 'ngx-legend-chart',
  styleUrls: ['./legend-chart.component.scss'],
  templateUrl: './legend-chart.component.html',
})
export class ECommerceLegendChartComponent implements OnInit {
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  fourthForm: FormGroup;
  fifthForm: FormGroup;
  ajouter=false;
  SoapData: any;
  person: any;

  constructor(private fb: FormBuilder,private router: Router,private serv: MySoapService ,private personService: PersonService) {
  }

  
  getPerson(): void {
    this.personService.getPerson('PP-1')
      .subscribe(response => {
        // Extract the data from the SOAP response
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'text/xml');
        const firstName = xmlDoc.getElementsByTagName('firstName')[0].childNodes[0].nodeValue;
        const lastName = xmlDoc.getElementsByTagName('lastName')[0].childNodes[0].nodeValue;
        const cityOfBirth = xmlDoc.getElementsByTagName('cityOfBirth')[0].childNodes[0].nodeValue;

        // Set the person object with the extracted data
        this.person = { firstName, lastName, cityOfBirth };
      });
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
