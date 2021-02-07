
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './@core/utils/auth.guard';
export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'auth', loadChildren: () => import('./@app/auth/auth.module')
      .then(m => m.AuthModule),
  },

  {
    path: 'projects', loadChildren: () => import('./@app/projects/projects.module')
      .then(m => m.ProjectsModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'projects/:projectId/assets/:assetId',
    loadChildren: () =>
      import('./@app/map-features/map-features.module').then(
        (m) => m.MapFeaturesModule,
      ),
    canLoad: [AuthGuard],
  },

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
