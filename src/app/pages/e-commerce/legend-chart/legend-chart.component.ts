
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../../../person.service';
import { Console } from 'console';
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
  id:string;
  person: any = [];
  beneficiary:any[];
  rib: any =[]
  fullName:any;
  BeneficiaryId=localStorage.getItem('BeneficiaryId');
  MemberId = localStorage.getItem('MemberId');
  personId = localStorage.getItem('personId')
  ContractId=localStorage.getItem('ContractId')
  SocialSecurityDataId = localStorage.getItem('SocialSecurityDataId')
  Beneficiary:any={"quality": "" ,"nomAdherent": "","plafond": "","situationAdhesion": "","dateAdhesion": "" ,"numeroAdhesion": "","dateDebutPrestation": "","datePosition": "","dateFinPrestation": "","nomEtPrenom": ""}
  contact: any ={"registrationNumber": "" ,"contractSituation": "","contractSituationDate": ""};
  APCI:any={ "dateAPCI": "", "apciEnumType": "","startDate": "", "endDate": "","expiryDate": "", "name": ""}
  Comment:any={ "comment": "", "type": ""}
  PricingData:any={ "pricingCode": "", "serviceCode": ""}
  SocialSecurityData:any={"cnrpsRegistrationNumber": "" ,"cnssRegistrationNumber": "","cnamRegistrationNumber": "","sector": "","isAPCI": "" ,"isChronicDisease": ""}
  ProfessionalInfo :any ={"position": "" ,"salary": "","classe": "","echelon": "","positionDate": "" ,"college": "","membershipStatus": "","contributionStartDate": "","contributionEndDate": "","refundType": "" ,"category": ""}
  Member :any ={ "membershipCodeNumber": "", "membershipDate": "", "membershipExpiryDate": "","parentCompany": "", "subscriptionDate": "", "mainContact":"" ,"patterns": "", "isVIP": "", "isCouple":"" }
  personSave: any ={"personType": "" ,"policyNumber": "","firstName": "","lastName": "","nationality": ""};
  Contract:any={"registrationNumber": "","contractSituation": "","contractSituationDate": ""};
  selectedFile: File | undefined;
  constructor(private fb: FormBuilder,private router: Router,private personService: PersonService) {
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  AddContractDocumentFileByContract(): void {
    if (this.selectedFile) {
      const ContractDocumentFile = {
        fileName: this.selectedFile.name,
        fileType: this.selectedFile.type,
        fileSize: this.selectedFile.size,
        fileContent: this.selectedFile,
        uploadDate: new Date().toISOString(),
        proofType: 'BANK_PROOF'
      };
      this.personService.AddContractDocumentFileByContract(this.ContractId, ContractDocumentFile).subscribe(
        (response) => {
          // Handle the response after successful file upload
          console.log(response);
        },
        (error) => {
          // Handle the error
          console.error(error);
        }
      );
    }
  }
  /*addContract() {
     console.log(this.id , this.Member)
        this.getPerson();
        this.getContacts();
        this.getRib();
        this.addingContract(memberId)
        console.log("contractid-localstore=",this.ContractId);
        //this.personService.addPricingDataByContract(this.ContractId, this.PricingData);
        this.addCommentByCOntract(this.ContractId);
        localStorage.removeItem('ContractId')        
        //window.location.reload();
  }); 
  } */
  addMember(){
    this.personService.addMember(this.id,this.Member).subscribe((memberId) => {
      localStorage.setItem('MemberId', memberId);
      this.MemberId=memberId
      console.log("memberID",memberId);
      this.getPerson();
      this.getContacts();
      this.getRib();
    });
  }

  addContract(){
    this.personService.addContract(this.MemberId, this.Contract).subscribe((contractId)=>{
      console.log("memberid",this.MemberId)
      console.log(contractId)
      this.personService.addPricingDataByContract(contractId, this.PricingData).subscribe({
        next: (data: any) => {},
        error: (err:any) => {console.log(err, 'error pricing data') },
        complete: () => { console.log('success')}
      });

      this.personService.addCommentByContract(contractId,this.Comment).subscribe({
        next: (data: any) => {},
        error: (err:any) => {console.log(err, ' error comment') },
        complete: () => { console.log('success')}
      }
    );
    this.ContractId=contractId
    localStorage.setItem('ContractId',contractId)  
  });
  }

  addprofessionalinfo() {
    console.log("fi wost EL professionlinfo",this.ContractId)
      this.personService.addprofessionalinfo(this.ContractId,this.ProfessionalInfo).subscribe({
        next: (data: any) => {},
        error: (err:any) => {console.log(err) },
        complete: () => { console.log('success')}
      });
      
  } 
  AddBeneficiary() {
    console.log("fi wost EL Beneficiary",this.ContractId)
      this.personService.AddBeneficiary(this.ContractId,this.id,this.Beneficiary).subscribe((BeneficiaryId)=>{
        console.log("BeneficiaryId",this.BeneficiaryId)  
        this.personService.AddSocialSecurityDataByBeneficiary(BeneficiaryId, this.SocialSecurityData).subscribe({
          next: (data: any) => {},
          error: (err:any) => {console.log(err, 'error pricing data') },
          complete: () => { console.log('success')}
        });
      });
  } 

  removeContractId(){
    localStorage.removeItem('ContractId')
    window.location.reload
  }
  addSocialSecurityData() {
    console.log(this.MemberId , this.SocialSecurityData)
      this.personService.addSocialSecurityData(this.MemberId,this.SocialSecurityData).subscribe((data) => {
        localStorage.setItem('SocialSecurityDataId', data)
        if(this.SocialSecurityData.isAPCI){
          console.log("ssd id",data)
          this.personService.addAPCIBySocialSecurityData(data, this.APCI).subscribe(
          {
            next: (data: any) => {},
            error: (err:any) => {console.log(err) },
            complete: () => { console.log('success')}
          }
        );
        }
      console.log('addAPCIBySocialSecurityData added successfully.');
  });
  } 
  getPersonByNAme() {
    this.personService.findPersonByFullName(this.fullName)
     .subscribe(person => {
      this.id=person.id;
      console.log("beneficiare with person id fetched",this.id)
      this.beneficiary=person
      console.log(this.id)
    });
  }
  getPerson() {
    this.personService.getPerson(this.id)
     .subscribe(person => {
      this.person = person;
      console.log(this.id)
      console.log(this.person)
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

  getContacts(){
    this.personService.getContactByPersonId(this.id).subscribe(
      {
        next: (data: any) => {this.contact = data},
        error: (err:any) => {console.log(err) },
        complete: () => { }
      }
    )
  }

  getRib(){
    this.personService.GetBankAccountsByPersonId(this.id).subscribe(
      {
        next: (data: any) => {this.rib = data},
        error: (err:any) => {console.log(err) },
        complete: () => { }
      }
    )
  }
  ngOnInit() {
console.log(this.ContractId)
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
