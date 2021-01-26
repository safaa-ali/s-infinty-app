import { ContainerComponent } from './container/container.component';
import { NbCardModule, NbContextMenuModule, NbIconModule } from '@nebular/theme';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// const COMPONENTS = [
//   ProjectCardComponent
// ]

@NgModule({
  declarations: [
    ProjectCardComponent,
    ContainerComponent,

  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbContextMenuModule,

  ],
  exports: [
    ProjectCardComponent,
    ContainerComponent,

  ],
  entryComponents: [
    ProjectCardComponent,
    ContainerComponent,


  ],
})
export class SharedModule { }
