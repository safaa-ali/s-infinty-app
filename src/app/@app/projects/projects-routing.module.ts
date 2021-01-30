import { AddProjectComponent } from './components/add-project/add-project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './projects.component';
import { MapViewComponent } from './components/map-view/map-view.component';
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
  {
    path: "",
    loadChildren: () =>
      import("../map-features/map-features.module").then(
        (m) => m.MapFeaturesModule
      ),
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule { }
