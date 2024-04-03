import { Component, OnInit } from '@angular/core';
import { StockalertService } from '../../service/stockalert.service';
import { StockAlert } from '../../service/models/stockalert.model';

@Component({
  selector: 'app-stockalert',
  templateUrl: './stockalert.component.html',
  styleUrl: './stockalert.component.scss'
})
export class StockalertComponent implements OnInit {
  constructor(private stockAlertService: StockalertService) {}

  stockAlerts: StockAlert[] = [];
  ngOnInit(): void {
    this.stockAlertService.getAllStockAlerts().subscribe(
      (data: StockAlert[]) => {
        this.stockAlerts = data;
        console.log(this.stockAlerts[0]);
        console.log(this.stockAlerts.length);
        
        
  
        console.log(this.stockAlerts[1]);
        
      },
      (error) => {
        console.error('Error fetching shelves:', error);
      }
    );
  }

}
