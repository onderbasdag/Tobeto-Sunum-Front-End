import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { Observer } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router,private http: HttpClient) { }

  loginForm = this.fb.group({
    email: 'levent',
    password: 'levent',
  });

  
  ngOnInit(): void {
    console.log("baslatiliyor..");
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });    
  
  }

  

 login() {
  
 }


 onSubmit(): void {
  console.log('hello');
  
   const email = this.loginForm.get('email')!.toString() as string
      const password = this.loginForm.get('password')!.toString() as string

    const loginData = { email }; // Bir istek gövdesi nesnesi oluşturun

    this.http.post<any>('http://localhost:8080/api/v1/employee/add', loginData, { // İstekler için HttpClient kullanın
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).subscribe({
      next: (value) => {
        console.log('Başarılı Giriş:', value);
        // Başarılı giriş yanıtını yönetin (örneğin, başka bir sayfaya yönlendirin)
      },
      error: (error) => {
        console.error('Giriş Hatası:', error);
        // Giriş hatalarını yönetin (örneğin, kullanıcıya hata mesajı gösterin)
      },
      complete: () => {
        console.log('Giriş isteği tamamlandı');
      }
    });
  
}

  
 
}
  