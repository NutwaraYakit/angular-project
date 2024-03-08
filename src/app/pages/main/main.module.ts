import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { MainLayoutModule } from './main-layout/main-layout.module';

@NgModule({
  imports: [MainRoutingModule, MainLayoutModule],
  declarations: [MainComponent],
  exports: [MainComponent],
})
export class MainModule {}
