import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { Observer } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    console.log("baslatiliyor..");
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });    
  
  }

  onSubmit(): void {    
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')!.value; // Nullability kontrolü için ! işareti kullanıldı
      const password = this.loginForm.get('password')!.value;
      
      // Form submit edildiğinde login metodu çağrılır
      this.loginService.login(email, password).subscribe({
        next: (value) => {
          console.log('Value:', value);
        },
        error: (error) => {
          console.error('Error:', error);
        },
        complete: () => {
          console.log('Completed');
        }
      });
    }
  }
}
  