import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MainLayoutComponent } from './main-layout.component';
import { MainRoutingModule } from '../main-routing.module';
import { IconsProviderModule } from 'src/app/icons-provider.module';

@NgModule({
  imports: [
    NzLayoutModule,
    NzMenuModule,
    MainRoutingModule,
    IconsProviderModule,
  ],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
