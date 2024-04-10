import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankPageComponent } from './layouts/blank-page/blank-page.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
      },
      {
        path: 'auth',
        component: BlankPageComponent,
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: FullpageComponent,
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      // {
      //   path: 'asset',
      //   component: FullpageComponent,
      //   loadChildren: () =>
      //     import('./asset/asset.module').then((m) => m.AssetModule),
      // },
      // {
      //   path: 'user',
      //   component: FullpageComponent,
      //   loadChildren: () =>
      //     import('./user/user.module').then((m) => m.UserModule),
      // },
      // {
      //   path: 'license',
      //   component: FullpageComponent,
      //   loadChildren: () =>
      //     import('./license/license.module').then(
      //       (m) => m.LicenseModule
      //     ),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
