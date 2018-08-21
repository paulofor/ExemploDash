import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from 'src/app/principal/principal.component';
import { LoginComponent } from '../login/login.component';
import { DummyComponent } from '../dummy/dummy.component';

const routes: Routes = [
  { path: '', loadChildren: '../layout/layout.module#LayoutModule' },
  { path: 'login' , component: DummyComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
