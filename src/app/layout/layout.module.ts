import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from 'src/app/layout-routing/layout-routing.module';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TabelaComponent } from 'src/app/tabela/tabela.component';


@NgModule({
  imports: [
      CommonModule,
      LayoutRoutingModule
      //TranslateModule,
      //NgbDropdownModule.forRoot()
  ],
  declarations: [
    LayoutComponent, 
    SidebarComponent, 
    HeaderComponent,
    DashboardComponent,
    TabelaComponent
  ]

})
export class LayoutModule { }
