import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee/employee.service';
import { Employee } from '../../service/models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  employees: Employee[] = [];
  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data: Employee[]) => {
        this.employees = data;
        console.log(this.employees[0]);
        console.log(this.employees.length);
        
        
  
        console.log(this.employees[1]);
        
      },
      (error) => {
        console.error('Error fetching stock:', error);
      }
    );
  }

}
