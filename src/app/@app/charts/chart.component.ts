import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from 'app/pages/pages-menu';
@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menu = MENU_ITEMS;

}
