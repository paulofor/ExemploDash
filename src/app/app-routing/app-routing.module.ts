import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from 'src/app/principal/principal.component';

const routes: Routes = [
  { path: 'xx', loadChildren: '../layout/layout.module#LayoutModule' },
  { path: 'principal' , component: PrincipalComponent }
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
