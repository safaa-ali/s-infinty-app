import { ThemeModule } from './../../@theme/theme.module';
import { NbMenuModule, NbCardModule, NbIconModule, NbContextMenuModule, NbSelectModule, NbButtonModule, NbInputModule, NbFormFieldModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { SharedModule } from 'app/@shared/shared.module';
// import { FilterPipe } from 'app/@core/utils/filter.pipe';
@NgModule({
  declarations: [
    ProjectsComponent,
    DashboardComponent,
    AddProjectComponent,
    // FilterPipe,
  ],
  imports: [
    CommonModule,

    ProjectsRoutingModule,
    NbMenuModule,
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbContextMenuModule,
    FormsModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
    NbFormFieldModule,
    SharedModule,

  ],
})
export class ProjectsModule { }
