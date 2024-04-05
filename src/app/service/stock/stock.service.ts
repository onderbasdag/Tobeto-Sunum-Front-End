import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock.models';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  apiUrl = environment.serverURL;

  private stockAlertUrl = this.apiUrl+'/stock/get/all';


  constructor(private http: HttpClient) { }

  getAllStocks(): Observable<Stock[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xsZXIiOiJhZG1pbiJ9.NVYeBGDocnb8grigojndDasa-TstTKMIO909UygZ-42JMlSfOIbB--AhisXTqAA1kjTqJu7KhNuAi1p0wU7v2g',      
    });
    return this.http.get<Stock[]>(this.stockAlertUrl, {headers});
  }
}
