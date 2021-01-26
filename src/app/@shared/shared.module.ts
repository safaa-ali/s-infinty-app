// import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ContainerComponent } from './container/container.component';
import { NbCardModule, NbContextMenuModule, NbIconModule, NbFormFieldModule, NbInputModule } from '@nebular/theme';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// const COMPONENTS = [
//   ProjectCardComponent
// ]
ReactiveFormsModule;
@NgModule({
  declarations: [
    ProjectCardComponent,
    ContainerComponent,
    SearchComponent,

  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbContextMenuModule,
    NbFormFieldModule,
    NbInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ProjectCardComponent,
    ContainerComponent,
    SearchComponent,

  ],
  entryComponents: [
    ProjectCardComponent,
    ContainerComponent,
    SearchComponent,

  ],
})
export class SharedModule { }
