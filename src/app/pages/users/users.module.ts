import { NgModule } from '@angular/core';

import { MainRoutingModule } from '../main/main-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [MainRoutingModule],
  declarations: [UsersComponent],
  exports: [UsersComponent],
})
export class MainModule {}
