import { Pipe, PipeTransform } from '@angular/core';
import { Contract } from './Model/contract';
@Pipe({
  name: 'filtrePolice'
})
export class FiltrePolicePipe implements PipeTransform {

  transform(contracts : Contract [] , policeFiltre: string):Contract [] {
    if(policeFiltre == null || policeFiltre === ""){
      return contracts;
    }
    return contracts.filter(contract => contract.policyNumber.includes(policeFiltre));
}

}
