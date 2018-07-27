import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children : [
        { path: 'dashboard', component: DashboardComponent },
      ]
  } 
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
