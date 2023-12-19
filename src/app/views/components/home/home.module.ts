import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from '../../../views/components/template/header/header.component';
import { HomeComponent } from './home.component';
import { BtnPrimaryComponent } from '../../../views/components/btn-primary/btn-primary.component';
import { MainSectionComponent } from '../../../section/main-section/main-section.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    BtnPrimaryComponent,
    MainSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
