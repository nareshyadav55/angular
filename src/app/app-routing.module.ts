import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [  
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', loadChildren: () => import ('./login/login.module').then(m=>m.LoginModule)},
{ path: 'register', loadChildren: () => import ('./register/register.module').then(m=>m.RegisterModule)},
{
  path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => import ('./home/dashboard/dashboard.module').then(m=>m.DashboardModule)},]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
