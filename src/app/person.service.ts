import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { subscribeOn } from 'rxjs-compat/operator/subscribeOn';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = 'http://localhost:8080/endpoints/ghm'; // the URL for the SOAP endpoint

  constructor(private http: HttpClient) { }

  getPerson(id: string): Observable<any> {

    // Define the SOAP envelope and request body
    const xml = `
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://ghm.com/web-service">
    <soap:Header/>
    <soap:Body>
       <web:GetPersonRequest>
          <web:id>${id}</web:id>
       </web:GetPersonRequest>
    </soap:Body>
 </soap:Envelope>
    `;

    // Set the headers and options for the HTTP request
    const headers = new HttpHeaders({
      'Content-Type': 'text/xml',
      'SOAPAction': 'http://ghm.com/web-service/GetPerson'
    });
    const options = {
      headers: headers,
      obseve : 'response'
      //responseType: 'text' as const // set the response type to text
    };

    // Make the HTTP request and return the response
    return this.http.post<any>(this.apiUrl, xml, options);
  }
}