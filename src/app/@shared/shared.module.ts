import { ContainerComponent } from './container/container.component';
import {
  NbCardModule,
  NbContextMenuModule,
  NbIconModule,
} from '@nebular/theme';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
@NgModule({
  declarations: [
    ProjectCardComponent,
    ContainerComponent,
    MapComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbContextMenuModule,
    LeafletModule,
  ],
  exports: [ProjectCardComponent, ContainerComponent, MapComponent],
  entryComponents: [ProjectCardComponent, ContainerComponent, MapComponent],
})
export class SharedModule {}
