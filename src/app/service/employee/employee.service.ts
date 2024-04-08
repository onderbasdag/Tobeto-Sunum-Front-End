import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = environment.serverURL;

  private allEmployeesUrl = this.apiUrl+'/employee/get/all';


  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xsZXIiOiJhZG1pbiJ9.NVYeBGDocnb8grigojndDasa-TstTKMIO909UygZ-42JMlSfOIbB--AhisXTqAA1kjTqJu7KhNuAi1p0wU7v2g',      
    });
    return this.http.get<Employee[]>(this.allEmployeesUrl, {headers});
  }
}
