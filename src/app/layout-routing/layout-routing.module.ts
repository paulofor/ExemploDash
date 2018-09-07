import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TabelaComponent } from '../tabela/tabela.component';
import { DummyComponent } from '../dummy/dummy.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';



const routes: Routes = [
  {
      path: '' , component: LayoutComponent,
      children : [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'tabela' , component: TabelaComponent},
        { path: '' , component: DummyComponent}
      ]
  } 
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LayoutComponent,
    DashboardComponent,
    TabelaComponent,
    DummyComponent,
    SidebarComponent, 
    HeaderComponent,
  ],
  exports: [RouterModule] 
})
export class LayoutRoutingModule { }
