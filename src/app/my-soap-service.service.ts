import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MySoapService {
  private url = 'http://172.20.10.2:8080/endpoints/ghm.wsdl'

  constructor( private http: HttpClient) {
  } 
    getSoapData()
    {
      return this.http.get(this.url);
      }
  }

