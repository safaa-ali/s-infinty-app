import { ThemeModule } from './../../@theme/theme.module';
// import { GalleryModule } from 'ng-gallery';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import {
  NbMenuModule,
  NbCardModule,
  NbIconModule,
  NbContextMenuModule,
  NbButtonModule,
  NbInputModule,
  NbFormFieldModule,
  NbSidebarModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/@shared/shared.module';
import { MapFeaturesRoutingModule } from './map-features-routing.module';
import { MapFeaturesComponent } from './map-features.component';
import { DocumentsComponent } from './documents/documents.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ImagesComponent } from './components/images/images.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';

@NgModule({
  declarations: [MapFeaturesComponent, DocumentsComponent, ImagesComponent, AnalysisComponent, BarChartComponent, LineChartComponent],
  imports: [
    CommonModule,
    MapFeaturesRoutingModule,
    NbMenuModule,
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbContextMenuModule,
    NbFormFieldModule,
    SharedModule,
    NgxGalleryModule,
    NgxChartsModule,
    NbSidebarModule.forRoot(),
    // GalleryModule.withConfig({}),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),

  ],

})
export class MapFeaturesModule {

}
