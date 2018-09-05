import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginRouterComponent } from './exemplo-router/login-router/login-router.component';
import { PrincipalRouterComponent } from './exemplo-router/principal/principal-router/principal-router.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DetalheRouterComponent } from 'src/app/exemplo-router/principal/detalhe-router/detalhe-router.component';


const appRoutes: Routes = [
  { path: '', component: LoginRouterComponent },
  { 
    path: 'principal-router', component: PrincipalRouterComponent,
    children: [
      { path : "simples" , component: DetalheRouterComponent}
    ]
  }
]

@NgModule({
  declarations: [
    LoginRouterComponent,
    PrincipalRouterComponent,
    AppComponent,
    DetalheRouterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
