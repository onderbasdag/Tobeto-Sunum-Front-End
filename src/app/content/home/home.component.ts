import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-content-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {} // Router servisini enjekte edin

  redirectToDashboard(): void {
    this.router.navigate(['/dashboard/shelf']); // Belirli bir URL'ye yönlendirme
  }

}
