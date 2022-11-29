import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotoComponent } from './fotografia/foto/foto.component';
import { FotoformComponent } from './fotografia/fotoform/fotoform.component';

@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    FotoformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
