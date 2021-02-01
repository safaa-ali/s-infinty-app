import { Component, OnInit, AfterViewInit } from '@angular/core';
import { getInstanceByDom, connect } from 'echarts';

@Component({
  selector: 'ngx-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements AfterViewInit {

  constructor() { }

  optionsBar = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: false,
        },
      },

    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  };

  ngAfterViewInit() {
    setTimeout(() => {
      const chartElement1 = document.getElementById('chart1');
      const chartElement2 = document.getElementById('chart2');
      const chart1 = getInstanceByDom(chartElement1);
      const chart2 = getInstanceByDom(chartElement2);
      connect([chart1, chart2]);
    });
  }


}
