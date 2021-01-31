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
import { DocumentCardComponent } from './document-card/document-card.component';
import { AnlalysisCardComponent } from './anlalysis-card/anlalysis-card.component';
import { ImageCardComponent } from './image-card/image-card.component';
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
    DocumentCardComponent,
    AnlalysisCardComponent,
    ImageCardComponent,
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
  exports: [
    ProjectCardComponent,
    ContainerComponent,
    SearchComponent,
    MapComponent,
    CardMapComponent,
    AnlalysisCardComponent,
    DocumentCardComponent,
    ImageCardComponent,
  ],
  entryComponents: [
    ProjectCardComponent,
    ContainerComponent,
    SearchComponent,
    MapComponent,
    CardMapComponent,
    AnlalysisCardComponent,
    DocumentCardComponent,
    ImageCardComponent,
  ],
})
export class SharedModule { }
