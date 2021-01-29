import { AnalysisComponent } from './components/analysis/analysis.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './components/images/images.component';
import { DocumentsComponent } from './documents/documents.component';
import { MapFeaturesComponent } from './map-features.component';

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
        path: '', redirectTo: 'documents',
      },
      {
        path: 'analises', component: AnalysisComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapFeaturesRoutingModule { }
