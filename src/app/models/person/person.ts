import { Address } from "../Address/address";
import { BankAccount } from "../BankAccount/bank-account";
import { ProfilePicture } from "../ProfilePicture/profile-picture";
import { Contact } from "../contact/contact";

export class Person {
  id: string;
  policyNumber: string;
  firstName: string;
  lastName: string;
  nationality: string;
  personType?: string | undefined;
  identityDocumentNumber: number;
  identityDocumentIssueDate: Date;
  identityDocumentType: string;
  createdDate: any;
  dateOfBirth: any;
  civilStatus: string;
  vitalStatus: string;
  cityOfBirth: string;
  maidenName: string;
  gender: string;
  countryOfBirth: string;
  stateOfBirth: string;
  effectiveDate: any;
  isResident: boolean;
  addresses: Address[];
  contacts: Contact[];
  identityDocumentFiles: any[]; // Replace `IdentityFile` with the appropriate class or interface
  bankAccounts: BankAccount[];
  profilePicture: ProfilePicture; // Replace `ProfilePicture` with the appropriate class or interface

}
