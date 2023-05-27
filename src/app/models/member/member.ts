import { SocialSecurityData } from "../socialSecurity/social-security-data";

export class Member {
  id: string;
  membershipCodeNumber: string;
  membershipDate: Date;
  membershipExpiryDate: Date;
  parentCompany: string;
  subscriptionDate: Date;
  mainContact: string;
  patterns: string;
  isVIP: boolean;
  isCouple: boolean;
  socialSecurityData: SocialSecurityData;
}
