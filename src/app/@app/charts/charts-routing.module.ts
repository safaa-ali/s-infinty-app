import { LinechartsComponent } from './components/linecharts/linecharts.component';
import { ChartComponent } from './chart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: ChartComponent,
    children: [
      {
        path: '', component: DashboardComponent,
      },
      {
        path: 'linecharts', component: LinechartsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule { }
