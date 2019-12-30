import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EverythingPageRoutingModule } from './everything-routing.module';

import { EverythingPage } from './everything.page';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EverythingPageRoutingModule,
    LoadingModule
  ],
  declarations: [EverythingPage],
})
export class EverythingPageModule {}
