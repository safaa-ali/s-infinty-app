import { AddProjectComponent } from './components/add-project/add-project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './projects.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { AuthGuard } from 'app/@core/utils/auth.guard';

const routes: Routes = [
  {
    path: '', component: ProjectsComponent,
    children: [
      {
        path: '', component: DashboardComponent,
      },
      {
        path: 'add', component: AddProjectComponent,
      },
    ],
  },
  {
    path: ':projectId', component: MapViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule { }
