import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  ajouter=false;
  id : number;
  pricingCode:number;
  serviceCode:number;
  salary:number;
  contributionEndDate:string;
  positionDate:string;
  contributionStartDate:string;
  socialSecurityData:any [];

  type:String;
  position:string;
  isAPCI:string;
  filier:string;
  apciEnumType:string;
  situationContrat:string;
  contracts: any = [];
  category:string;
  college:string;
  echelon:string;
  classe:string;
  comment:string;
  quality:string;
  contractSituationDate:string;
  beneficiaries:any[];
  typeRemboursement:string;
  situationAdhesion:string;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,private personservice:PersonService,private router:Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params ["id"] ;
    })
    this.personservice.getcontractsbyid(this.id)
    .subscribe(contracts => {
     this.contracts=contracts;
     console.log("CONTRACTS: ",this.contracts)
     this.contractSituationDate = contracts.contractSituationDate
     const date = new Date(this.contractSituationDate);
     const datePipe = new DatePipe('en-US');

     this.pricingCode = contracts.pricingData.pricingCode
     this.serviceCode = contracts.pricingData.serviceCode
     this.comment=contracts.comment.comment
     this.salary = contracts.professionalInfo.salary

     this.contributionEndDate = contracts.professionalInfo.contributionEndDate
     this.positionDate = contracts.professionalInfo.positionDate
     this.contributionStartDate = contracts.professionalInfo.contributionStartDate
     this.socialSecurityData = contracts.member.socialSecurityData
     if(contracts.professionalInfo.category == 'CATEGORY_1'){
      this.category='categorie 1'
     }else{
      this.category='category 2'
     }
     if(contracts.professionalInfo.echelon == 'ECHELON_1'){
      this.echelon='echelon 1'
     }else{
      this.echelon='echelon 2'
     }
     if(contracts.professionalInfo.classe == 'CLASSE_2'){
      this.classe='2ème classe'
     }else{
      this.classe='1ère classe'
     }
     this.beneficiaries = contracts.beneficiaries



/*      if(){

     }else if(){

     }else if(){

     }else{

     } */
     if(contracts.professionalInfo.refundType == 'REFUND_BY_BANK_WIRE'){
      this.typeRemboursement = 'Remboursement par virement bancaire'
     }else{
      this.typeRemboursement = 'Rembourcement par cheque'
     }
    
     if (contracts.comment.type == 'SUSPENSION_OF_PROCESSING_BENEFITS'){
      this.type='Bloucage du la saisir des prestation'
     }else{
      this.type='Bloucage du paiement des prestation'
     }
    
     if(contracts.professionalInfo.college == "COLLEGE_1"){
      this.college='première collège'
     }else{
      this.college='deuxième collège'
     }

    
     if(contracts.professionalInfo.membershipStatus == "ACTIVE"){
      this.situationAdhesion = 'active'
     }else{
      this.situationAdhesion='non active'
     }
     if(contracts.professionalInfo.position == "OFF_ACTIVITY"){
      this.position = 'non active'
     }else{
      this.position='active'
     }
    
     if(contracts.contractSituation == 'CANCELLED'){
      this.situationContrat='Annulé'
     }else if(contracts.contractSituation == 'IN_PROGRESS'){
      this.situationContrat='En cours'
     } else if(contracts.contractSituation == 'TERMINATED'){
      this.situationContrat='Terminé'
     }else{
      this.situationContrat='Non Signé'
     }
 
     if(contracts.member.socialSecurityData.apci.apciEnumType == 'CASE_4'){
      this.apciEnumType='case 4'
     }else if(contracts.member.socialSecurityData.apci.apciEnumType == 'CASE_1'){
      this.apciEnumType='case 1'
     } else if(contracts.member.socialSecurityData.apci.apciEnumType == 'CASE_2'){
      this.apciEnumType='case 2'
     }else{
      this.apciEnumType='case 3'
     }

     if(contracts.member.socialSecurityData.sector == 'SECTOR_4'){
      this.filier='secteur 4'
     }else if(contracts.member.socialSecurityData.sector == 'SECTOR_1'){
      this.filier='secteur 1'
     } else if(contracts.member.socialSecurityData.sector == 'SECTOR_2'){
      this.filier='secteur 2'
     }else{
      this.filier='secteur 3'
     }
     if(contracts.member.socialSecurityData.isAPCI == 'true'){
      this.isAPCI='vrai'
     }else{
      this.isAPCI='false'
     }


     
   });
  }
}
