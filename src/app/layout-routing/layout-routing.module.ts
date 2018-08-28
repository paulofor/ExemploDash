import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TabelaComponent } from '../tabela/tabela.component';
import { DummyComponent } from '../dummy/dummy.component';
import { DevExtremeComponent } from '../dev-extreme/dev-extreme.component';


const routes: Routes = [
  {
      path: '' , component: LayoutComponent,
      children : [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'tabela' , component: TabelaComponent},
        { path: 'grafico' , component: DevExtremeComponent},
        { path: '' , component: DummyComponent}
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
