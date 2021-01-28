import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { setInterval } from 'timers';
import { interval } from 'rxjs';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  randomData;
  saleData;
  constructor(private route: Router) {
    this.saleData = [
      { name: 'Mobiles', value: 105000 },
      { name: 'Laptop', value: 55000 },
      { name: 'AC', value: 15000 },
      { name: 'Headset', value: 150000 },
      { name: 'Fridge', value: 20000 },
    ];
  }

  ngOnInit(): void {
    this.randomData = Math.floor(Math.random() * 5) + 1;

    //  console.log(this.randomData);

    const source = interval(1000);
    //  const subscribe = source.subscribe(val => console.log(val));

  }



  lineChats() {
    this.route.navigate(['/charts/linecharts']);
  }

}
