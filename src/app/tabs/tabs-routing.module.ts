import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'everything',
        children: [
          {
            path: '',
            loadChildren: () => import('../everything/everything.module').then( m => m.EverythingPageModule)
          }
        ]
      },
      {
        path: 'top-headlines',
        children: [
          {
            path: '',
            loadChildren: () => import('../top-headlines/top-headlines.module').then( m => m.TopHeadlinesPageModule)
          }
        ]
      },
      {
        path: 'sources',
        children: [
          {
            path: '',
            loadChildren: () => import('../sources/sources.module').then( m => m.SourcesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/top-headlines',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/top-headlines',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
