import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormViewComponent } from './form-view/form-view.component';
import { FlashScreenComponent } from './flash-screen/flash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    FormViewComponent,
    FlashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
