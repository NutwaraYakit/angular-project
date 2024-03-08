import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';


@NgModule({
  imports: [LoginRoutingModule],
  declarations: [LoginComponent, LoginLayoutComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
