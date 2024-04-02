import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;       
  }

  redirectToHome(): void {
    this.router.navigate(['/dashboard']); 
    console.log("Sidebar home a gidiyor...");
  }
}
