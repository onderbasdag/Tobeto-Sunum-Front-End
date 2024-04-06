import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ShelfService } from '../../service/shelf/shelf.service';
import { Shelf } from '../../service/models/shelf.model';



@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent  {
   backgroundColor  = 'red';  
  shelves: Shelf[] = [];

  constructor(private shelfService: ShelfService, private elRef: ElementRef, private renderer: Renderer2) { }


 

  ngOnInit(): void {
    this.shelfService.getAllShelves().subscribe(
      (data: Shelf[]) => {
        this.shelves = data;
        console.log(this.shelves[0].stockId);
        console.log(this.shelves.length);
        // 4 numaralı rafı bulmak için
        
        
        // Konsolda 4 numaralı rafın bilgilerini yazdırmak için
        
  
        console.log(this.shelves[1]);
        
      },
      (error) => {
        console.error('Error fetching shelves:', error);
      }
    );
  }

  changeStyle() {
    const container = this.elRef.nativeElement.querySelector('.container');
    
      // Arka planı bulanıklaştırmak için bir div oluştur
      const backdropDiv = this.renderer.createElement('div');
      // Arka plan divine gerekli stil özelliklerini ekle
      this.renderer.setStyle(backdropDiv, 'position', 'absolute');
      this.renderer.setStyle(backdropDiv, 'top', '0');
      this.renderer.setStyle(backdropDiv, 'left', '0');
      this.renderer.setStyle(backdropDiv, 'width', '100%');
      this.renderer.setStyle(backdropDiv, 'height', '100%');
      this.renderer.setStyle(backdropDiv, 'background', 'url(\'https://example.com/your-background-image.jpg\')');
      this.renderer.setStyle(backdropDiv, 'backgroundSize', 'cover');
      this.renderer.setStyle(backdropDiv, 'backdropFilter', 'blur(7.5px)');
      // Arka plan divini container elementinin içine ekle
      this.renderer.appendChild(document.body, backdropDiv);          
  }
  test() {
    console.log("calisiyor..");
    
  }
}
