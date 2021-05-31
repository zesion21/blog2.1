import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((r) => r.MainModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./welcome/welcome.module').then((r) => r.WelcomeModule),
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
