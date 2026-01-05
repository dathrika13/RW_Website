import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'page',
        loadChildren: () =>
          import('../app/pages/pages.module').then(
            m => m.PagesModule
          )
      },
      { path: '', pathMatch: 'full', redirectTo: '/home' },
    ],
  },
  {
    path: 'docs',
    loadChildren: () =>
      import('../app/docs/docs.module').then(
        m => m.DocsModule
      )
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', redirectTo: '/404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled',scrollOffset: [0,200] })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
