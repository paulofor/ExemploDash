import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';


import { FormsModule }   from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { DummyComponent } from './dummy/dummy.component';
import { DevExtremeComponent } from './dev-extreme/dev-extreme.component';
import { DxButtonModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    DummyComponent,
    DevExtremeComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(appRoutes),
    FormsModule,
    LayoutModule,
    AppRoutingModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
