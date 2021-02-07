import { AnalysisComponent } from './components/analysis/analysis.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './components/images/images.component';
import { DocumentsComponent } from './documents/documents.component';
import { MapFeaturesComponent } from './map-features.component';
import { VideosComponent } from './components/videos/videos.component';
import { ModelsComponent } from './components/models/models.component';
import { PointCloudComponent } from './components/point-cloud/point-cloud.component';
import { POIComponent } from './components/poi/poi.component';
const routes: Routes = [
  {
    path: '', component: MapFeaturesComponent,
    children: [
      {
        path: 'documents', component: DocumentsComponent,
      },
      {
        path: 'images', component: ImagesComponent,
      },
      {
        path: 'videos', component: VideosComponent,
      },
      {
        path: 'analysis', component: AnalysisComponent,
      },
      {
        path: 'models', component: ModelsComponent,
      },
      {
        path: 'point-cloud', component: PointCloudComponent,
      },
      {
        path: 'POI', component: POIComponent,
      },
      {
        path: '', redirectTo: 'documents',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapFeaturesRoutingModule { }
