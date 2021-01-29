import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { temp } from '../../temp';
import { state } from '../../pie';


import * as shape from 'd3-shape'
import { country } from '../../country';

@Component({
  selector: 'analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  temp:any[];
  country:any[];
  state:any[];


randomdata;
  title ='Degree Of Temprature'
  constructor() {
    Object.assign(this, { temp });
    Object.assign(this, { country });
    Object.assign(this, { state });

console.log(this.country);

   }
   curve = shape.curveCardinal.tension(0);
  ngOnInit(): void {
    // this.randomdata = this.shuffle(this.saleData)
    // const source = interval(1000);
    // const subscribe = source.subscribe(val => {
    //   console.log(val);

    //   // this.randomdata = this.shuffle(this.country);
    //   console.log(this.randomdata);

    // });
  // setInterval(function(){
  //   this.randomdata
  //   },1000)
  }

  colorScheme = {
    domain: ['blue']
  };

  // shuffle(array) {
  //   var currentIndex = array.length, temporaryValue, randomIndex;

  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {

  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // And swap it with the current element.
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }
  // // this.randomdata =array
  //   return  array
  // }
  onSelect(data): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
