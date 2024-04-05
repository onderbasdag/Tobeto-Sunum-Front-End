import { Component, OnInit } from '@angular/core';
import { StockService } from '../../service/stock/stock.service';
import { Stock } from '../../service/models/stock.models';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent implements OnInit {
  constructor(private stockService: StockService) {}

  stock: Stock[] = [];
  ngOnInit(): void {
    this.stockService.getAllStocks().subscribe(
      (data: Stock[]) => {
        this.stock = data;
        console.log(this.stock[0]);
        console.log(this.stock.length);
        
        
  
        console.log(this.stock[1]);
        
      },
      (error) => {
        console.error('Error fetching stock:', error);
      }
    );
  }

}
