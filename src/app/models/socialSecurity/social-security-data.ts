import { APCI } from "../Apci/apci";

export class SocialSecurityData {
  id: number;
  cnrpsRegistrationNumber: string;
  cnssRegistrationNumber: string;
  cnamRegistrationNumber: string;
  sector: string;
  isAPCI: boolean;
  isChronicDisease: boolean;
  apci: APCI;
}
