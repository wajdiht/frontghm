import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../person.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contract } from '../../../models/contract/contract';
@Component({
  selector: 'ngx-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  // origineparentCompany: string;
  // originemembershipCodeNumber: number;
  // originemembershipDate: Date;
  // originemembershipExpiryDate: Date;
  // originemainContact: any;
  // originepatterns: any;
  // origineisCouple: boolean;
  // origineisvip: boolean;
  // originesubscriptionDate: any;
  Contracts:any=[];
  member:any=[];
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  fourthForm: FormGroup;
  fifthForm: FormGroup;
  Contractid: number;
  MemberId: any;
  PricingDataId:any;
  CommentId:any;
  profisionelinfoId:any;
  socialsecurityId:any;
  APCIId:any;
  // Commentid: any;
  // pricingDataid: any;
  // Contracts: any = [];
  // ProfessionalInfoid: any;
  // SocialSecurityDataid: any;
  // APCIid: any;
  // Beneficiaryid: any;
  // a: any = [];
  // b: any = [];
  // c: any = [];
  // d: any = [];
  // e: any = [];
  // f: any = [];
  // g: any = [];
  // id: number;
 
  // Beneficiary: any = { "quality": "", "nomAdherent": "", "plafond": "", "situationAdhesion": "", "dateAdhesion": "", "numeroAdhesion": "", "dateDebutPrestation": "", "datePosition": "", "dateFinPrestation": "", "nomEtPrenom": "" }
  // ProfessionalInfo: any = { "position": "", "salary": "", "classe": "", "echelon": "", "positionDate": "", "college": "", "membershipStatus": "", "contributionStartDate": "", "contributionEndDate": "", "refundType": "", "category": "" }
  // Comment: any = { "comment": "", "type": "" }
  // SocialSecurityData: any = { "cnrpsRegistrationNumber": "", "cnssRegistrationNumber": "", "cnamRegistrationNumber": "", "sector": "", "isAPCI": "", "isChronicDisease": "" }
  // APCI: any = { "dateAPCI": "", "apciEnumType": "", "startDate": "", "endDate": "", "expiryDate": "", "name": "" }
  // PricingData: any = { "pricingCode": "", "serviceCode": "" }
  // member1: any = { "membershipCodeNumber": "", "membershipDate": "", "membershipExpiryDate": "", "parentCompany": "", "subscriptionDate": "", "mainContact": "", "patterns": "", "isVIP": "", "isCouple": "" };z
  // Member: any = { "membershipCodeNumber": "", "membershipDate": "", "membershipExpiryDate": "", "parentCompany": "", "subscriptionDate": "", "mainContact": "", "patterns": "", "isVIP": "", "isCouple": "" };
  // Contract1: any = { "registrationNumber": "", "contractSituation": "", "contractSituationDate": "" }
  // contract: any = {
  //   "registrationNumber": "", "contractSituation": "", "contractSituationDate": "",
  //   "member": { "id" : "", "membershipCodeNumber": "", "membershipDate": "", "membershipExpiryDate": "", "parentCompany": "", "subscriptionDate": "", "mainContact": "", "patterns": "", "isVIP": "", "isCouple": "",
  //     "socialSecurityData": { "cnrpsRegistrationNumber": "", "cnssRegistrationNumber": "", "cnamRegistrationNumber": "", "sector": "", "isAPCI": "", "isChronicDisease": "", "apci": { "dateAPCI": "", "apciEnumType": "", "startDate": "", "endDate": "", "expiryDate": "", "name": "" } }
  //   },
  //   "pricingData": { "pricingCode": "", "serviceCode": "" }, "comment": { "comment": "", "type": "" },
  //   "professionalInfo": { "position": "", "salary": "", "classe": "", "echelon": "", "positionDate": "", "college": "", "membershipStatus": "", "contributionStartDate": "", "contributionEndDate": "", "refundType": "", "category": "" },
  //   "beneficiaries": [{ "quality": "", "nomAdherent": "", "plafond": "", "situationAdhesion": "", "dateAdhesion": "", "numeroAdhesion": "", "dateDebutPrestation": "", "datePosition": "", "dateFinPrestation": "", "nomEtPrenom": "" }]
  // };
  
  // MemberId: any = localStorage.getItem('MemberId');
  // PricingDataId: any = localStorage.getItem('PricingDataId');
  // CommentId: any = localStorage.getItem('CommentId')
  // ProfessionalInfoId: any = localStorage.getItem('ProfessionalInfoId')
  // SocialSecurityDataId: any = localStorage.getItem('SocialSecurityDataId')
  // APCIId: any = localStorage.getItem('APCIId')
  // BeneficiaryId: any = localStorage.getItem('BeneficiaryId')
  contract : Contract;

  constructor(private route: ActivatedRoute, private personService: PersonService, private fb: FormBuilder) { }
  UpdateContract() {
    // console.log(this.Contractid);
    this.personService.UpdateContract(this.Contractid,this.contract).subscribe({
      next: (data: any) => { console.log('Contraaaattttt: ', this.contract) },
      error: (err: any) => { console.log(err) },
      complete: () => { console.log('success contract update ') }
    });
    this.personService.UpdateMember(this.MemberId,this.contract.member).subscribe({
      next: (data: any) => { console.log('Membreeeeee: ', data) },
    });
    // this.personService.UpdatePricingData(this.PricingDataId,this.contract.pricingData).subscribe({
    //   next: (data: any) => { console.log('Pricingdata: ', data) },
    // });
    this.personService.UpdateComment(this.CommentId,this.contract.comment).subscribe(Comment => {
      console.log("Comment update ", Comment);
    });
  }

  UpdateProfessionalInfo() {
    this.personService.UpdateProfessionalInfo(this.Contractid,this.profisionelinfoId,this.contract.professionalInfo).subscribe({
      next: (data: any) => { },
      error: (err: any) => { console.log(err) },
      complete: () => { console.log('success prof update') }
    });
  }

  
  UpdateSocialSecurityData() {
    this.personService.UpdateSocialSecurityData(this.socialsecurityId,this.contract.member.socialSecurityData).subscribe({
      next: (data: any) => { },
      error: (err: any) => { console.log(err) },
      complete: () => { console.log('success social update') }
    });
    this.personService.UpdateAPCI(this.APCIId, this.contract.member.socialSecurityData.apci).subscribe(APCI => {
      console.log("APCI update", APCI);

    });
  }

  formatDate(dateString: string): string {
    if (!dateString) {
      return ''; // Return an empty string or handle the case when the date is undefined
    }
  
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${day}-${month}-${year}`;
  }
  // getmember() {
  //   this.personService.getmember(this.MemberId).subscribe(member => {
  //     console.log("data member", member);
  //     this.member1.membershipCodeNumber = member.membershipCodeNumber
  //     this.member1.parentCompany = member.parentCompany
  //     this.member1.mainContact = member.mainContact
  //     this.member1.membershipDate = member.membershipDate
  //     this.member1.membershipExpiryDate = member.membershipExpiryDate
  //     // const date2 = new Date( this.member1.membershipExpiryDate );
  //     // const datePipe2 = new DatePipe('en-US');
  //     // this.member1.membershipExpiryDate = datePipe2.transform(date2, 'yyyy-MM-dd');
  //     this.member1.patterns = member.patterns
  //     this.member1.isCouple = member.isCouple
  //     this.member1.isVIP = member.isVIP
  //     this.member1.subscriptionDate = member.subscriptionDate
      
  //   });
  // }
  getcontractsbyid() {
    this.personService.getcontractsbyid(this.Contractid).subscribe({
      next: (response) => {
        console.log("response",response);
        this.contract=response;
        console.log("contract",this.contract);
        this.MemberId=this.contract.member.id;
        this.CommentId=this.contract.comment.id;   
        this.profisionelinfoId=this.contract.professionalInfo.id;
        this.PricingDataId=this.contract.pricingData.id;
        this.socialsecurityId=this.contract.member.socialSecurityData.id;
        this.APCIId=this.contract.member.socialSecurityData.apci.id;
        console.log("member id ",this.socialsecurityId);
      },
      error: (error) => {
     
   }




 });
 }
      // this.MemberId = this.Contracts.member.id
      // this.Contract1 = Contracts
      // this.Contract.member.subscriptionDate = Contracts.member.subscriptionDate
      //  const date1 = new Date(this.Contracts.member.subscriptionDate);
      // const datePipe1 = new DatePipe('en-US');
      // this.Contract.member.subscriptionDate = datePipe1.transform(date1, 'yyyy-MM-dd');
      // this.Contract.registrationNumber = Contracts.registrationNumber
      // this.Contract.contractSituation = Contracts.contractSituation
      // this.Contract.contractSituationDate = Contracts.contractSituationDate
      // const date = new Date(this.Contract.contractSituationDate);
      // const datePipe = new DatePipe('en-US');
      // this.Contract.contractSituationDate = datePipe.transform(date, 'yyyy-MM-dd');

      // this.Contract.member.membershipCodeNumber = Contracts.member.membershipCodeNumber
      // this.Contract.member.parentCompany = Contracts.member.parentCompany
      // this.Contract.member.mainContact = Contracts.member.mainContact
      // this.Contract.member.membershipDate = Contracts.member.membershipDate
      // this.Contract.member.membershipExpiryDate = Contracts.member.membershipExpiryDate
      // this.Contract.member.subscriptionDate = Contracts.member.subscriptionDate
      // const date2 = new Date(this.Contract.member.membershipExpiryDate);
      // const datePipe2 = new DatePipe('en-US');
      // this.Contract.member.membershipExpiryDate = datePipe2.transform(date2, 'yyyy-MM-dd');
      // this.Contract.member.patterns = Contracts.member.patterns
      // this.Contract.member.isCouple = Contracts.member.isCouple
      // this.Contract.member.isVIP = Contracts.member.isVIP

      // this.Contract.pricingData.pricingCode = Contracts.pricingData.pricingCode
      // this.Contract.pricingData.serviceCode = Contracts.pricingData.serviceCode
      // this.Contract.comment.comment = Contracts.comment.comment
      // this.Contract.comment.type = Contracts.comment.type

      // this.Contract.professionalInfo.position = Contracts.professionalInfo.position
      // this.Contract.professionalInfo.salary = Contracts.professionalInfo.salary
      // this.Contract.professionalInfo.classe = Contracts.professionalInfo.classe
      // this.Contract.professionalInfo.echelon = Contracts.professionalInfo.echelon
      // this.Contract.professionalInfo.college = Contracts.professionalInfo.college
      // this.Contract.professionalInfo.membershipStatus = Contracts.professionalInfo.membershipStatus
      // this.Contract.professionalInfo.refundType = Contracts.professionalInfo.refundType
      // this.Contract.professionalInfo.category = Contracts.professionalInfo.category
      // this.Contract.professionalInfo.positionDate = Contracts.professionalInfo.positionDate
      // this.Contract.professionalInfo.contributionStartDate = Contracts.professionalInfo.contributionStartDate
      // this.Contract.professionalInfo.contributionEndDate = Contracts.professionalInfo.contributionEndDate


      // this.Contract.member.socialSecurityData.cnrpsRegistrationNumber = Contracts.member.socialSecurityData.cnrpsRegistrationNumber
      // this.Contract.member.socialSecurityData.cnssRegistrationNumber = Contracts.member.socialSecurityData.cnssRegistrationNumber
      // this.Contract.member.socialSecurityData.cnamRegistrationNumber = Contracts.member.socialSecurityData.cnamRegistrationNumber
      // this.Contract.member.socialSecurityData.sector = Contracts.member.socialSecurityData.sector
      // this.Contract.member.socialSecurityData.isAPCI = Contracts.member.socialSecurityData.isAPCI
      // this.Contract.member.socialSecurityData.isChronicDisease = Contracts.member.socialSecurityData.isChronicDisease

      // this.Contract.member.socialSecurityData.apci.dateAPCI = Contracts.member.socialSecurityData.apci.dateAPCI
      // this.Contract.member.socialSecurityData.apci.apciEnumType = Contracts.member.socialSecurityData.apci.apciEnumType
      // this.Contract.member.socialSecurityData.apci.startDate = Contracts.member.socialSecurityData.apci.startDate
      // this.Contract.member.socialSecurityData.apci.endDate = Contracts.member.socialSecurityData.apci.endDate
      // this.Contract.member.socialSecurityData.apci.expiryDate = Contracts.member.socialSecurityData.apci.expiryDate
      // this.Contract.member.socialSecurityData.apci.name = Contracts.member.socialSecurityData.apci.name

      // this.Contract.beneficiaries[0].quality = Contracts.beneficiaries[0].quality
      // this.Contract.beneficiaries[0].nomAdherent = Contracts.beneficiaries[0].nomAdherent
      // this.Contract.beneficiaries[0].plafond = Contracts.beneficiaries[0].plafond
      // this.Contract.beneficiaries[0].situationAdhesion = Contracts.beneficiaries[0].situationAdhesion
      // this.Contract.beneficiaries[0].numeroAdhesion = Contracts.beneficiaries[0].numeroAdhesion
      // this.Contract.beneficiaries[0].nomEtPrenom = Contracts.beneficiaries[0].nomEtPrenom
      // this.Contract.beneficiaries[0].dateAdhesion = Contracts.beneficiaries[0].dateAdhesion
      // this.Contract.beneficiaries[0].dateDebutPrestation = Contracts.beneficiaries[0].dateDebutPrestation
      // this.Contract.beneficiaries[0].datePosition = Contracts.beneficiaries[0].datePosition
      // this.Contract.beneficiaries[0].dateFinPrestation = Contracts.beneficiaries[0].dateFinPrestation

      // //origine
      // this.origineisCouple = this.Contract.member.isCouple
      // this.origineisvip = this.Contract.member.isVIP
      // this.originepatterns = this.Contract.member.patterns
      // this.originemainContact = this.Contract.member.mainContact
      // this.originemembershipCodeNumber = this.Contract.Member.membershipDate
      // this.origineparentCompany = this.Contract.Member.parentCompany
      // this.originemembershipDate = this.Contract.Member.membershipCodeNumber
      // this.originemembershipExpiryDate = this.Contract.member.membershipExpiryDate
      // this.originesubscriptionDate = this.Contract.member.subscriptionDate


      // this.a = Contracts.member;
      // let memberId = this.a.id;
      // localStorage.setItem(this.MemberId, memberId)
      // console.log("memberid get local", this.MemberId);

      // this.b = Contracts.pricingData;
      // this.pricingDataid = this.b.id;
      // localStorage.setItem('PricingDataId', this.pricingDataid)
      // console.log("PricingDataId get local", this.PricingDataId);

      // this.c = Contracts.comment;
      // this.Commentid = this.c.id;
      // localStorage.setItem('CommentId', this.Commentid)
      // console.log("Commentid get local", this.CommentId);

      // this.d = Contracts.professionalInfo;
      // this.ProfessionalInfoid = this.d.id;
      // localStorage.setItem('ProfessionalInfoId', this.ProfessionalInfoid)
      // console.log("ProfessionalInfoid get local", this.ProfessionalInfoId);

      // this.e = Contracts.member.socialSecurityData;
      // this.SocialSecurityDataid = this.e.id;
      // localStorage.setItem('SocialSecurityDataId', this.SocialSecurityDataid)
      // console.log("SocialSecurityDataId get local", this.SocialSecurityDataId);

      // this.f = Contracts.member.socialSecurityData.apci;
      // this.APCIid = this.f.id;
      // localStorage.setItem('APCIId', this.APCIid)
      // console.log("APCIId get local", this.APCIId);

      // this.g = Contracts.beneficiaries[0];
      // this.Beneficiaryid = this.g.id;
      // localStorage.setItem('BeneficiaryId', this.Beneficiaryid)
      // console.log("BeneficiaryId get local", this.BeneficiaryId);


    
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.Contractid = params["id"];
    })
    this.Contractid;
    this.getcontractsbyid();

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




