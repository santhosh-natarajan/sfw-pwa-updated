import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormViewComponent } from './form-view/form-view.component';
import { FlashScreenComponent } from './flash-screen/flash-screen.component';
import { SecondFormComponent } from './second-form/second-form.component';
import { SelectDropDownModule } from 'ngx-select-dropdown'


@NgModule({
  declarations: [
    AppComponent,
    FormViewComponent,
    FlashScreenComponent,
    SecondFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
