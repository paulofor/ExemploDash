import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [
    './layout.component.css'
  ],

  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
