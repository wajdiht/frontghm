
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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
  constructor(private fb: FormBuilder,private router: Router ) {
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
