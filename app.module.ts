import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogInComponent } from './log-in/log-in.component';
import { SIgnUpComponent } from './sign-up/sign-up.component';
import { ForgetPComponent } from './forget-p/forget-p.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { GuideComponent } from './guide/guide.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogInComponent,
    SIgnUpComponent,
    ForgetPComponent,
    FormComponent,
    AboutComponent,
    GuideComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
