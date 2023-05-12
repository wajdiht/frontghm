import { Pipe, PipeTransform } from '@angular/core';
import { Contract } from './Model/contract';

@Pipe({
  name: 'filtrestatue'
})
export class FiltrestatuePipe implements PipeTransform {

  transform(contracts : Contract [] , statueFiltre: string):Contract [] {
    if(statueFiltre == null || statueFiltre === ""){
      return contracts;
    }
    return contracts.filter(contract => contract.contractSituation.toLowerCase().includes(statueFiltre.toLowerCase()));
}
}
