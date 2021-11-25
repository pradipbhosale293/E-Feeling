import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GuideComponent } from './guide/guide.component';
import { HeaderComponent } from './header/header.component';
import { LogInComponent } from './log-in/log-in.component';
import { SIgnUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"", component:HeaderComponent},
  {path:"about", component:AboutComponent},
  {path:"guide", component:GuideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
