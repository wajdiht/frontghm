import { Person } from "../person/person";
import { SocialSecurityData } from "../socialSecurity/social-security-data";

export class Beneficiary {
  id: string;
  quality: string;
  nomAdherent: string;
  plafond: string;
  situationAdhesion: string;
  dateAdhesion: Date;
  numeroAdhesion: string;
  dateDebutPrestation: Date;
  datePosition: Date;
  nomEtPrenom: string;
  dateFinPrestation: Date;
  socialSecurityData: SocialSecurityData;
  person:Person;
}
