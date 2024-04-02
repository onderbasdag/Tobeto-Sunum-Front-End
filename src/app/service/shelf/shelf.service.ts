import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Shelf } from '../../models/shelf.model';




@Injectable({
  providedIn: 'root'
})
export class ShelfService {
  createAuthorizationHeader(headers: HttpHeaders) {
    
    headers.append('Authorization', 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJyb2xsZXIiOiJhZG1pbiJ9.NVYeBGDocnb8grigojndDasa-TstTKMIO909UygZ-42JMlSfOIbB--AhisXTqAA1kjTqJu7KhNuAi1p0wU7v2g");    
    
  }
  apiUrl = environment.serverURL;

  private shelfUrl = this.apiUrl+'/shelf/get/all';


  constructor(private http: HttpClient) { }

  getAllShelves(): Observable<Shelf[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xsZXIiOiJhZG1pbiJ9.NVYeBGDocnb8grigojndDasa-TstTKMIO909UygZ-42JMlSfOIbB--AhisXTqAA1kjTqJu7KhNuAi1p0wU7v2g',      
    });
    return this.http.get<Shelf[]>(this.shelfUrl, {headers});
  }


}
