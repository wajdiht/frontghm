import { Beneficiary } from "../Beneficiary/beneficiary";
import { ProfessionalInfo } from "../ProfessionalInfo/professional-info";
import { Comment } from "../comment/comment";
import { ContractFile } from "../contractFile/contract-file";
import { Member } from "../member/member";
import { PricingData } from "../pricingData/pricing-data";

export class Contract {
  id: number;
  registrationNumber: bigint;
  professionalInfo: ProfessionalInfo;
  pricingData: PricingData;
  member: Member;
  beneficiaries: Beneficiary[];
  comment: Comment;
  contractSituation: string;
  contractSituationDate: Date;
  documentFiles: ContractFile[];
}
