// import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {
  NbCardModule,
  NbContextMenuModule,
  NbIconModule,
  NbFormFieldModule,
  NbInputModule,
} from '@nebular/theme';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardMapComponent } from './card-map/card-map.component';
import { DocumentsCardComponent } from './documents-card/documents-card.component';
// const COMPONENTS = [
//   ProjectCardComponent
// ]
ReactiveFormsModule;
@NgModule({
  declarations: [
    ProjectCardComponent,
    ContainerComponent,
    SearchComponent,
    MapComponent,
    CardMapComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbContextMenuModule,
    LeafletModule,
    NbFormFieldModule,
    NbInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ProjectCardComponent, ContainerComponent, SearchComponent, MapComponent, CardMapComponent, DocumentsCardComponent],
  entryComponents: [ProjectCardComponent, ContainerComponent, SearchComponent, MapComponent, CardMapComponent, DocumentsCardComponent],
})
export class SharedModule { }
