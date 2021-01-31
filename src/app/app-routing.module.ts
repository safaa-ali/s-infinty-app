
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './@core/utils/auth.guard';
export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth', loadChildren: () => import('./@app/auth/auth.module')
    .then(m => m.AuthModule),
  },

  {
    path: 'projects', loadChildren: () => import('./@app/projects/projects.module')
    .then(m => m.ProjectsModule),
    // canActivate: [AuthGuard],
  },
  {
    path: 'projects/:projectId/assets/:assetId',
    loadChildren: () =>
      import('./@app/map-features/map-features.module').then(
        (m) => m.MapFeaturesModule,
      ),
    // canActivate: [AuthGuard],
  },
  // {
  //   path: 'charts', loadChildren: () => import('./@app/charts/charts.module')
  //   .then(m => m.ChartsModule),
  // },
  // {
  //   path: ':projectId/assets', loadChildren: () => import('./@app/map-features/map-features.module')
  //   .then(m => m.MapFeaturesModule),
  //   // canActivate: [AuthGuard],
  // },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
