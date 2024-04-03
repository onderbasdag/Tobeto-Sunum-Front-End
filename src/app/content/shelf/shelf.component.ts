import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ShelfService } from '../../service/shelf/shelf.service';
import { Shelf } from '../../service/models/shelf.model';



@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {
   backgroundColor  = 'red';  
  shelves: Shelf[] = [];

  constructor(private shelfService: ShelfService, private elRef: ElementRef, private renderer: Renderer2) { }


  changeStyle() {
    const container = this.elRef.nativeElement.querySelector('.container');
    
    // Diğer stil özelliklerini buraya ekleyebilirsiniz
  }

  private generateGridColumns(columnCount: number): string {
    let gridColumnValue = '';
    for (let i = 0; i < columnCount; i++) {
      gridColumnValue += '1fr ';
    }
    return gridColumnValue.trim();
  }

  ngOnInit(): void {
    this.shelfService.getAllShelves().subscribe(
      (data: Shelf[]) => {
        this.shelves = data;
        console.log(this.shelves[0].stockId);
        console.log(this.shelves.length);
        // 4 numaralı rafı bulmak için
        
        this.changeStyle();
        // Konsolda 4 numaralı rafın bilgilerini yazdırmak için
        
  
        console.log(this.shelves[1]);
        
      },
      (error) => {
        console.error('Error fetching shelves:', error);
      }
    );
  }
}
