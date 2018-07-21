
import { Routes } from '@angular/router'
import { LoginComponent } from '../app/login/login.component';
import { PrincipalComponent } from '../app/principal/principal.component';


export const appRoutes: Routes = [
    { path: 'home', component: PrincipalComponent },
    { path: 'login', component: LoginComponent },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
];

