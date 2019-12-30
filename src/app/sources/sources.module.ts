import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SourcesPageRoutingModule } from './sources-routing.module';

import { SourcesPage } from './sources.page';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SourcesPageRoutingModule,
    LoadingModule
  ],
  declarations: [SourcesPage]
})
export class SourcesPageModule {}
