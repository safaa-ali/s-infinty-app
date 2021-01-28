import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { MapFeatures } from './map-features.component';

const routes: Routes = [
  {
    path: '', component: MapFeatures,
    children: [
      {
        path: 'documents', component: DocumentsComponent,
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
