import { Pipe, PipeTransform } from '@angular/core';
import { Contract } from './Model/contract';

@Pipe({
  name: 'filtreAdhesion'
})
export class FiltreAdhesionPipe implements PipeTransform {

  transform(contracts : Contract [] , adhesionNumberFilter: string):Contract [] {
    if(adhesionNumberFilter == null || adhesionNumberFilter === ""){
      return contracts;
    }
    return contracts.filter(contract => contract.registrationNumber.includes(adhesionNumberFilter));
}
}
