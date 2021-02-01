import { Component, OnInit, OnDestroy } from '@angular/core';
import * as echarts from 'echarts/lib/echarts';

@Component({
  selector: 'ngx-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, OnDestroy {

  optionsLine: any;
  updateOptions: any;

  private oneDay = 24 * 3600 * 1000;
  private now: Date;
  private value: number;
  private data: any[];
  private timer: any;

  constructor () { }




  ngOnInit(): void {
    // generate some random testing data:
    this.data = [];
    this.now = new Date(1997, 9, 3);
    this.value = Math.random() * 1000;

    for (let i = 0; i < 1000; i++) {
      this.data.push(this.randomData());
    }

    // initialize chart options:
    this.optionsLine = {
      color: ['#707070'],
      textColor: '#fff',
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#FE5F38',
        textColor: '#fff',
        formatter: (params) => {
          params = params[0];
          const date = new Date(params.name);
          return date.getFullYear() + ' : ' + params.value[1];
        },

        axisPointer: {
          animation: true,
          type: 'none',

        },
        textStyle: {
          color: '#fff',
        },
      },
      grid: {
        left: '20px',
        right: '10px',
        bottom: '40px',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'time',
          splitLine: {
            show: false,
          },
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: '#707070',
            },
          },
          axisLabel: {
            interval: 0,
            rotate: 40,
            textStyle: {
              color: '#707070',
            },
          },
          name: 'Day',
          nameLocation: 'center',
          nameTextStyle: {
            fontWeight: '400',
            fontFamily: 'Segoe UI',
            fontSize: '18px',
          },
        },


      ],
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false,
        },
        axisLine: {
          show: true,

          symbolSize: [10, 15],
          lineStyle: {
            color: '#333',
            width: 1,
            type: 'solid',
          },
        },

        axisLabel: {
          textStyle: {
            color: '#707070',
          },
          formatter: '{value}',

        },
        name: 'Cases Number',
        nameLocation: 'end',
        nameTextStyle: {
          fontWeight: '400',
          fontFamily: 'Segoe UI',
          fontSize: '18px',
        },
      },
      series: [{
        name: 'Mocking Data',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: this.data,
      }],
    };

    // Mock dynamic data:
    this.timer = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        this.data.shift();
        this.data.push(this.randomData());
      }

      // update series data:
      this.updateOptions = {
        series: [{
          data: this.data,
        }],
      };
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  randomData() {
    this.now = new Date(this.now.getTime() + this.oneDay);
    this.value = this.value + Math.random() * 21 - 10;
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(this.value),
      ],
    };
  }
}
