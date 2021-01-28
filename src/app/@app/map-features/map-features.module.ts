import { ThemeModule } from './../../@theme/theme.module';
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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/@shared/shared.module';
import { MapFeaturesRoutingModule } from './map-features-routing.module';
import { MapFeatures } from './map-features.component';
import { DocumentsComponent } from './documents/documents.component';
@NgModule({
  declarations: [MapFeatures, DocumentsComponent],
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
    NbSidebarModule.forRoot(),
  ],

})
export class MapFeaturesModule { }
