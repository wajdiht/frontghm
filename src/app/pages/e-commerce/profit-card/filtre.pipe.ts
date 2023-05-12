import { Pipe, PipeTransform } from '@angular/core';
import { Contract } from './Model/contract';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {
  transform(contracts : Contract [] , nameFilter: string):Contract [] {
    if(nameFilter == null || nameFilter === ""){
      return contracts;
    }
    return contracts.filter(contract => contract.fullName.toLowerCase().includes(nameFilter.toLowerCase()));
}
}
