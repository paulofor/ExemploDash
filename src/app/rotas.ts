
import { Routes } from '@angular/router'
import { LoginComponent } from '../app/login/login.component';
import { PrincipalComponent } from '../app/principal/principal.component';
import { LayoutComponent } from './layout/layout.component';


export const appRoutes: Routes = [
    { path: 'layout', component: LayoutComponent },
    { path: 'home', component: PrincipalComponent },
    { path: 'login', component: LoginComponent },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
];

    