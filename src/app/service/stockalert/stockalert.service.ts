import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockAlert } from '../models/stockalert.model';


@Injectable({
  providedIn: 'root'
})
export class StockalertService {

  apiUrl = environment.serverURL;

  private stockAlertUrl = this.apiUrl+'/stockalert/get/all';


  constructor(private http: HttpClient) { }

  getAllStockAlerts(): Observable<StockAlert[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xsZXIiOiJhZG1pbiJ9.NVYeBGDocnb8grigojndDasa-TstTKMIO909UygZ-42JMlSfOIbB--AhisXTqAA1kjTqJu7KhNuAi1p0wU7v2g',      
    });
    return this.http.get<StockAlert[]>(this.stockAlertUrl, {headers});
  }
}
