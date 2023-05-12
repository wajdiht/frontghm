import { Pipe, PipeTransform } from '@angular/core';
import { Contract } from './Model/contract';
@Pipe({
  name: 'dateFiltre'
})
export class DateFiltrePipe implements PipeTransform {

  transform(contracts : Contract [] , dateFiltre: string):Contract [] {
    if(dateFiltre == null || dateFiltre === ""){
      return contracts;
    }
    return contracts.filter(contract => contract.birthDate.toLowerCase().includes(dateFiltre.toLowerCase()));
}

}
