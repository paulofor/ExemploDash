import { NgModule, Component, enableProdMode } from '@angular/core';
import { Service, Data } from './dev-extreme.service';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule } from 'devextreme-angular';



if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-dev-extreme',
  templateUrl: './dev-extreme.component.html',
  styleUrls: ['./dev-extreme.component.css'],
  providers: [Service]
})


export class DevExtremeComponent  {
  dataSource: Data[];

  constructor(service: Service) {
      this.dataSource = service.getData();
  }	
 
}

@NgModule({
  imports: [
      BrowserModule,
      DxChartModule
  ],
  declarations: [DevExtremeComponent],
  bootstrap: [DevExtremeComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
