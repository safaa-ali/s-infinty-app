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
        path: ':projectId/assets/:assetId/documents', component: DocumentsComponent,
      },
      {
        path: ':assetId/images', component: ImagesComponent,
      },
      {
        path: '', redirectTo: ':projectId/assets/:assetId/documents',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapFeaturesRoutingModule { }
