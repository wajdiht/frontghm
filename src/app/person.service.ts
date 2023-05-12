import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'http://localhost:8080/endpoints/ghm';
  private api =  'http://localhost:8080'
  person = {};

  constructor(private http: HttpClient) { }

  getPerson(id: string): Observable<any> {
    const xml = `
      <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
        <soap:Header/>
        <soap:Body>
          <web:GetPersonRequest>
            <web:id>${id}</web:id>
          </web:GetPersonRequest>
        </soap:Body>
      </soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/GetPerson'
    });

    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' }).pipe(
      map(response => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'application/xml'); // removed `.body` from response since it is already a string
        const personNode = xmlDoc.getElementsByTagName('ns2:Person')[0];
        const person = {
          id: personNode.getElementsByTagName('ns2:id')[0].textContent,
          personType: personNode.getElementsByTagName('ns2:personType')[0].textContent,
          policyNumber: personNode.getElementsByTagName('ns2:policyNumber')[0].textContent,
          firstName: personNode.getElementsByTagName('ns2:firstName')[0].textContent,
          lastName: personNode.getElementsByTagName('ns2:lastName')[0].textContent,
          nationality: personNode.getElementsByTagName('ns2:nationality')[0].textContent,
          identityDocumentNumber: personNode.getElementsByTagName('ns2:identityDocumentNumber')[0].textContent,
          identityDocumentIssueDate: personNode.getElementsByTagName('ns2:identityDocumentIssueDate')[0].textContent,
          identityDocumentType: personNode.getElementsByTagName('ns2:identityDocumentType')[0].textContent,
          dateOfBirth: personNode.getElementsByTagName('ns2:dateOfBirth')[0].textContent,
          civilStatus: personNode.getElementsByTagName('ns2:civilStatus')[0].textContent,
          vitalStatus: personNode.getElementsByTagName('ns2:vitalStatus')[0].textContent,
          cityOfBirth: personNode.getElementsByTagName('ns2:cityOfBirth')[0].textContent,
          maidenName: personNode.getElementsByTagName('ns2:maidenName')[0].textContent,
          gender: personNode.getElementsByTagName('ns2:gender')[0].textContent,
          countryOfBirth: personNode.getElementsByTagName('ns2:countryOfBirth')[0].textContent,
          stateOfBirth: personNode.getElementsByTagName('ns2:stateOfBirth')[0].textContent,
          effectiveDate: personNode.getElementsByTagName('ns2:effectiveDate')[0].textContent,
          isResident: personNode.getElementsByTagName('ns2:isResident')[0].textContent
        };
        return person
      }));
  }


  addPerson(person: any): Observable<any> {
    const xml = `
      <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
        <soap:Header/>
        <soap:Body>
          <web:AddPersonRequest>
              <web:Person>
                <web:personType>${person.personType}</web:personType>
                <web:policyNumber>${person.policyNumber}</web:policyNumber>
                <web:firstName>${person.firstName}</web:firstName>
                <web:lastName>${person.lastName}</web:lastName>
                <web:nationality>${person.nationality}</web:nationality>
                <web:identityDocumentNumber>${person.identityDocumentNumber}</web:identityDocumentNumber>
                <web:identityDocumentIssueDate>${person.identityDocumentIssueDate}</web:identityDocumentIssueDate>
                <web:identityDocumentType>${person.identityDocumentType}</web:identityDocumentType>
                <web:dateOfBirth>${person.dateOfBirth}</web:dateOfBirth>
                <web:civilStatus>${person.civilStatus}</web:civilStatus>
                <web:vitalStatus>${person.vitalStatus}</web:vitalStatus>
                <web:cityOfBirth>${person.cityOfBirth}</web:cityOfBirth>
                <web:maidenName>${person.maidenName}</web:maidenName>
                <web:gender>${person.gender}</web:gender>
                <web:countryOfBirth>${person.countryOfBirth}</web:countryOfBirth>
                <web:stateOfBirth>${person.stateOfBirth}</web:stateOfBirth>
                <web:effectiveDate>${person.effectiveDate}</web:effectiveDate>
                <web:isResident>${person.isResident}</web:isResident>
              </web:Person>
          </web:AddPersonRequest>
        </soap:Body>
    </soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/AddPerson'
    });

    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' }).pipe(
      map(response => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'application/xml'); // removed `.body` from response since it is already a string
        const personId = xmlDoc.getElementsByTagName('ns2:PersonId')[0].textContent;
        console.log(personId)
        return personId
      }));
  }

  addAddress(personId: any, address: any): Observable<any> {
    const xml = `
  <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
  <soap:Header/>
  <soap:Body>
     <web:AddAddressByPersonRequest>
        <web:PersonId>${personId}</web:PersonId>
        <web:Address>
           <web:street>${address.street}</web:street>
           <web:city>${address.city}</web:city>
           <web:state>${address.state}</web:state>
           <web:zip>${address.zip}</web:zip>
        </web:Address>
     </web:AddAddressByPersonRequest>
  </soap:Body>
</soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/AddPerson'
    });
    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' })
  }
  addContact(personId: any, contact: any): Observable<any> {
    const xml = `
  <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
  <soap:Header/>
  <soap:Body>
     <web:AddContactByPersonRequest>
        <web:PersonId>${personId}</web:PersonId>
        <web:Contact>
           <web:email>${contact.email}</web:email>
           <web:mobilePhoneNumber>${contact.mobilePhoneNumber}</web:mobilePhoneNumber>
           <web:landlineNumber>${contact.landlineNumber}</web:landlineNumber>
        </web:Contact>
     </web:AddContactByPersonRequest>
  </soap:Body>
</soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/AddPerson'
    });
    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' })
  }


  addBankAccount(personId: any, BankAccount: any): Observable<any> {
    const xml = `
  <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
  <soap:Header/>
  <soap:Body>
     <web:AddBankAccountByPersonRequest>
        <web:PersonId>${personId}</web:PersonId>
        <web:BankAccount>
        <web:orderNumber>${BankAccount.orderNumber}</web:orderNumber>
        <web:bankName>${BankAccount.bankName}</web:bankName>
        <web:ribNumber>${BankAccount.ribNumber}</web:ribNumber>
        <web:currency>${BankAccount.currency}</web:currency>
        <web:agency>${BankAccount.agency}</web:agency>
        <web:windowNumber>${BankAccount.windowNumber}</web:windowNumber>
        <web:ribKey>${BankAccount.ribKey}</web:ribKey>
        <web:ribType>${BankAccount.ribType}</web:ribType>
        <web:accountNumber>${BankAccount.accountNumber}</web:accountNumber>
        <web:locality>${BankAccount.locality}</web:locality>
        <web:agencyAddress>${BankAccount.agencyAddress}</web:agencyAddress>
        </web:BankAccount>
     </web:AddBankAccountByPersonRequest>
  </soap:Body>
</soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/AddPerson'
    });
    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' })
  }

  addMember(pId: string, Member: any): Observable<any> {
    const xml = `
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
    <soap:Header/>
    <soap:Body>
       <web:AddMemberRequest>
          <web:PersonId>${pId}</web:PersonId>
          <web:Member>
             <web:membershipCodeNumber>${Member.membershipCodeNumber}</web:membershipCodeNumber>
             <web:membershipDate>${Member.membershipDate}</web:membershipDate>
             <web:membershipExpiryDate>${Member.membershipExpiryDate}</web:membershipExpiryDate>
             <web:parentCompany>${Member.parentCompany}</web:parentCompany>
             <web:subscriptionDate>${Member.subscriptionDate}</web:subscriptionDate>
             <web:mainContact>${Member.mainContact}</web:mainContact>
             <web:patterns>${Member.patterns}</web:patterns>
             <web:isVIP>${Member.isVIP}</web:isVIP>
             <web:isCouple>${Member.isCouple}</web:isCouple>
          </web:Member>
       </web:AddMemberRequest>
    </soap:Body>
 </soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/AddPerson'
    });
    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' }).pipe(
      map(response => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'application/xml'); // removed `.body` from response since it is already a string
        const memberId = xmlDoc.getElementsByTagName('ns2:MemberId')[0].textContent;
        console.log(memberId)
        return memberId
      }));
  }

  getContactByPersonId(personId: string): Observable<any> {
    const xml = `
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
    <soap:Header/>
    <soap:Body>
       <web:GetContactsByPersonIdRequest>
          <web:PersonId>${personId}</web:PersonId>
       </web:GetContactsByPersonIdRequest>
    </soap:Body>
 </soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/GetPerson'
    });

    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' }).pipe(
      map(response => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'application/xml'); // removed `.body` from response since it is already a string
        const contactNode = xmlDoc.getElementsByTagName('ns2:contacts')[0];
        const contact = {
          id: contactNode.getElementsByTagName('ns2:id')[0].textContent,
          email: contactNode.getElementsByTagName('ns2:email')[0].textContent,
          mobilePhoneNumber: contactNode.getElementsByTagName('ns2:mobilePhoneNumber')[0].textContent,
          landlineNumber: contactNode.getElementsByTagName('ns2:landlineNumber')[0].textContent,
          
        };
        return contact
      }));
  }
  GetBankAccountsByPersonId(personId: string): Observable<any> {
    const xml = `
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
   <soap:Header/>
   <soap:Body>
      <web:GetBankAccountsByPersonIdRequest>
         <web:PersonId>${personId}</web:PersonId>
      </web:GetBankAccountsByPersonIdRequest>
   </soap:Body>
</soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/GetBankAccountsByPersonId'
    });

    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' }).pipe(
      map(response => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'application/xml'); // removed `.body` from response since it is already a string
        const ribNode = xmlDoc.getElementsByTagName('ns2:bankAccounts')[0];
        const rib = {
          id: ribNode.getElementsByTagName('ns2:id')[0].textContent,
          ribNumber: ribNode.getElementsByTagName('ns2:ribNumber')[0].textContent,
        };
        return rib
      }));
  }
  addprofessionalinfo(ContractId: any, ProfessionalInfo: any): Observable<any> {
    const xml = `
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
    <soap:Header/>
    <soap:Body>
       <web:AddProfessionalInfoRequest>
          <web:ContractId>${ContractId}</web:ContractId>
          <web:ProfessionalInfo>
             <web:position>${ProfessionalInfo.position}</web:position>
             <web:salary>${ProfessionalInfo.salary}</web:salary>
             <web:classe>${ProfessionalInfo.classe}</web:classe>
             <web:echelon>${ProfessionalInfo.echelon}</web:echelon>
             <web:positionDate>${ProfessionalInfo.positionDate}</web:positionDate>
             <web:college>${ProfessionalInfo.college}</web:college>
             <web:membershipStatus>${ProfessionalInfo.membershipStatus}</web:membershipStatus>
             <web:contributionStartDate>${ProfessionalInfo.contributionStartDate}</web:contributionStartDate>
             <web:contributionEndDate>${ProfessionalInfo.contributionEndDate}</web:contributionEndDate>
             <web:refundType>${ProfessionalInfo.refundType}</web:refundType>
             <web:category>${ProfessionalInfo.category}</web:category>
          </web:ProfessionalInfo>
       </web:AddProfessionalInfoRequest>
    </soap:Body>
 </soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/AddProfessionalInfo'
    });
    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' })
  }
  addSocialSecurityData(MemberId: any, SocialSecurityData: any): Observable<any> {
    const xml = `
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
   <soap:Header/>
   <soap:Body>
      <web:AddSocialSecurityDataByMemberRequest>
         <web:MemberId>${MemberId}</web:MemberId>
         <web:SocialSecurityData>
            <web:cnrpsRegistrationNumber>${SocialSecurityData.cnrpsRegistrationNumber}</web:cnrpsRegistrationNumber>
            <web:cnssRegistrationNumber>${SocialSecurityData.cnssRegistrationNumber}</web:cnssRegistrationNumber>
            <web:cnamRegistrationNumber>${SocialSecurityData.cnamRegistrationNumber}</web:cnamRegistrationNumber>
            <web:sector>${SocialSecurityData.sector}</web:sector>
            <web:isAPCI>${SocialSecurityData.isAPCI}</web:isAPCI>
            <web:isChronicDisease>${SocialSecurityData.isChronicDisease}</web:isChronicDisease>
         </web:SocialSecurityData>
      </web:AddSocialSecurityDataByMemberRequest>
   </soap:Body>
</soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/AddSocialSecurityDataByMember'
    });
    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' }).pipe(
      map(response => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'application/xml'); // removed `.body` from response since it is already a string
        const SocialSecurityDataId = xmlDoc.getElementsByTagName('ns2:SocialSecurityId')[0].textContent;
        console.log(SocialSecurityDataId)
        return SocialSecurityDataId
      }));
  //response SocialSecurityDataId  ;;;;;;;;;;;;pour apci
  }
  addAPCIBySocialSecurityData(SocialSecurityDataId: any, APCI: any): Observable<any> {
    const xml = `
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
   <soap:Header/>
   <soap:Body>
      <web:AddAPCIBySocialSecurityDataRequest>
         <web:SocialSecurityDataId>${SocialSecurityDataId}</web:SocialSecurityDataId>
         <web:APCI>
            <web:dateAPCI>${APCI.dateAPCI}</web:dateAPCI>
            <web:apciEnumType>${APCI.apciEnumType}</web:apciEnumType>
            <web:startDate>${APCI.startDate}</web:startDate>
            <web:endDate>${APCI.endDate}</web:endDate>
            <web:expiryDate>${APCI.expiryDate}</web:expiryDate>
            <web:name>${APCI.name}</web:name>
         </web:APCI>
      </web:AddAPCIBySocialSecurityDataRequest>
   </soap:Body>
</soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/AddAPCIBySocialSecurityData'
    });
    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' })
  }
  addPricingDataByContract(ContractId: any, PricingData: any): Observable<any> {
    const xml = `
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
    <soap:Header/>
    <soap:Body>
       <web:AddPricingDataByContractRequest>
          <web:ContractId>${ContractId}</web:ContractId>
          <web:PricingData>
             <web:pricingCode>${PricingData.pricingCode}</web:pricingCode>
             <web:serviceCode>${PricingData.serviceCode}</web:serviceCode>
          </web:PricingData>
       </web:AddPricingDataByContractRequest>
    </soap:Body>
 </soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/AddPricingDataByContract'
    });
    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' })
  }
  addCommentByContract(ContractId: any, Comment: any): Observable<any> {
    const xml = `
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
   <soap:Header/>
   <soap:Body>
      <web:AddCommentByContractRequest>
         <web:ContractId>${ContractId}</web:ContractId>
         <web:Comment>
            <web:comment>${Comment.comment}</web:comment>
            <web:type>${Comment.type}</web:type>
         </web:Comment>
      </web:AddCommentByContractRequest>
   </soap:Body>
</soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/AddCommentByContract'
    });
    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' })
  }
  addContract(MemberId: string, Contract: any): Observable<any> {
    const xml = `
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
   <soap:Header/>
   <soap:Body>
      <web:AddContractRequest>
         <web:memberId>${MemberId}</web:memberId>
         <web:Contract>
            <web:registrationNumber>${Contract.registrationNumber}</web:registrationNumber>
            <web:contractSituation>${Contract.contractSituation}</web:contractSituation>
            <web:contractSituationDate>${Contract.contractSituationDate}</web:contractSituationDate>
         </web:Contract>
      </web:AddContractRequest>
   </soap:Body>
</soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/AddContract'
    });
    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' }).pipe(
      map(response => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'application/xml'); // removed `.body` from response since it is already a string
        const contractId = xmlDoc.getElementsByTagName('ns2:ContractId')[0].textContent;
        console.log(contractId)
        return contractId
      }));
  }
  findPersonByFullName(fullName: string): Observable<any> {
    const xml = `
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
    <soap:Header/>
    <soap:Body>
       <web:FindPersonByFullNameRequest>
          <web:FullName>${fullName}</web:FullName>
       </web:FindPersonByFullNameRequest>
    </soap:Body>
 </soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/AddContract'
    });
    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' }).pipe(
      map(response => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'application/xml'); // removed `.body` from response since it is already a string
        const personNode = xmlDoc.getElementsByTagName('ns2:Person')[0];
        const person = {
          id: personNode.getElementsByTagName('ns2:id')[0].textContent,
          personType: personNode.getElementsByTagName('ns2:personType')[0].textContent,
          policyNumber: personNode.getElementsByTagName('ns2:policyNumber')[0].textContent,
          firstName: personNode.getElementsByTagName('ns2:firstName')[0].textContent,
          lastName: personNode.getElementsByTagName('ns2:lastName')[0].textContent,
          nationality: personNode.getElementsByTagName('ns2:nationality')[0].textContent,
          identityDocumentNumber: personNode.getElementsByTagName('ns2:identityDocumentNumber')[0].textContent,
          identityDocumentIssueDate: personNode.getElementsByTagName('ns2:identityDocumentIssueDate')[0].textContent,
          identityDocumentType: personNode.getElementsByTagName('ns2:identityDocumentType')[0].textContent,
          dateOfBirth: personNode.getElementsByTagName('ns2:dateOfBirth')[0].textContent,
          civilStatus: personNode.getElementsByTagName('ns2:civilStatus')[0].textContent,
          vitalStatus: personNode.getElementsByTagName('ns2:vitalStatus')[0].textContent,
          cityOfBirth: personNode.getElementsByTagName('ns2:cityOfBirth')[0].textContent,
          maidenName: personNode.getElementsByTagName('ns2:maidenName')[0].textContent,
          gender: personNode.getElementsByTagName('ns2:gender')[0].textContent,
          countryOfBirth: personNode.getElementsByTagName('ns2:countryOfBirth')[0].textContent,
          stateOfBirth: personNode.getElementsByTagName('ns2:stateOfBirth')[0].textContent,
          effectiveDate: personNode.getElementsByTagName('ns2:effectiveDate')[0].textContent,
          isResident: personNode.getElementsByTagName('ns2:isResident')[0].textContent
        };
        return person
      }));
  }
  AddBeneficiary(ContractId: string, personId: any,Beneficiary: any): Observable<any> {
    const xml = `
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
    <soap:Header/>
    <soap:Body>
       <web:AddBeneficiaryRequest>
          <web:ContractId>${ContractId}</web:ContractId>
          <web:PersonId>${personId}</web:PersonId>
          <web:Beneficiary>
             <web:quality>${Beneficiary.quality}</web:quality>
             <web:nomAdherent>${Beneficiary.nomAdherent}</web:nomAdherent>
             <web:plafond>${Beneficiary.plafond}</web:plafond>
             <web:situationAdhesion>${Beneficiary.situationAdhesion}</web:situationAdhesion>
             <web:dateAdhesion>${Beneficiary.dateAdhesion}</web:dateAdhesion>
             <web:numeroAdhesion>${Beneficiary.numeroAdhesion}</web:numeroAdhesion>
             <web:dateDebutPrestation>${Beneficiary.dateDebutPrestation}</web:dateDebutPrestation>
             <web:datePosition>${Beneficiary.datePosition}</web:datePosition>
             <web:dateFinPrestation>${Beneficiary.dateFinPrestation}</web:dateFinPrestation>
             <web:nomEtPrenom>${Beneficiary.nomEtPrenom}</web:nomEtPrenom>
          </web:Beneficiary>
       </web:AddBeneficiaryRequest>
    </soap:Body>
 </soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/AddBeneficiary'
    });
    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' }).pipe(
      map(response => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'application/xml'); // removed `.body` from response since it is already a string
        const BeneficiaryId = xmlDoc.getElementsByTagName('ns2:BeneficiaryId')[0].textContent;
        console.log(BeneficiaryId)
        return BeneficiaryId
      }));
  }

  AddSocialSecurityDataByBeneficiary(BeneficiaryId: string,SocialSecurityData: any): Observable<any> {
    const xml = `
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
    <soap:Header/>
    <soap:Body>
       <web:AddSocialSecurityDataByBeneficiaryRequest>
          <web:BeneficiaryId>${BeneficiaryId}</web:BeneficiaryId>
          <web:SocialSecurityData>
             <web:isAPCI>${SocialSecurityData.isAPCI}</web:isAPCI>
          </web:SocialSecurityData>
       </web:AddSocialSecurityDataByBeneficiaryRequest>
    </soap:Body>
 </soap:Envelope>
    `;
    const headers = new HttpHeaders({
      'Content-Type': 'application/soap+xml',
      'SOAPAction': 'http://ghm.com/web-service/AddSocialSecurityDataByBeneficiary'
    });
    // Changed `subscBankAccounte()` to `pipe(map())` to return an Observable
    return this.http.post(this.apiUrl, xml, { headers, responseType: 'text' })
  
  }
  getcontracts(): Observable<any> {
   
    return this.http.get<any>(`${this.api}/contracts`);

  }
}


