import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { LoginComponent } from './login/login.component';
import { ShelfComponent } from './content/shelf/shelf.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard/shelf', component: DashboardComponent},
  { path: 'dashboard/home', component: DashboardComponent},
  {path: 'dashboard/stockalert', component: DashboardComponent},
  { path: 'dashboard/stock', component: DashboardComponent},
  { path: 'dashboard/employee', component: DashboardComponent},
  { path: 'dashboard/product', component: DashboardComponent},
  {path: 'login', component: LoginComponent},  
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }