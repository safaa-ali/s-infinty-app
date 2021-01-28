import { ThemeModule } from './../../@theme/theme.module';
import { NbButtonModule, NbMenuModule } from '@nebular/theme';
import { SharedModule } from 'app/@shared/shared.module';
import { ChartComponent } from './chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LinechartsComponent } from './components/linecharts/linecharts.component';

@NgModule({
  declarations: [
    ChartComponent,
    DashboardComponent,
    LinechartsComponent,
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    ThemeModule,
    SharedModule,
    NbMenuModule,
    // NgxChartsModule,
    NbButtonModule,
  ],
})
export class ChartsModule { }
