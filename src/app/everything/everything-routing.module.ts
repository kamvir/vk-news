import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EverythingPage } from './everything.page';

const routes: Routes = [
  {
    path: '',
    component: EverythingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EverythingPageRoutingModule {}
