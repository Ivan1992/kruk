import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpletinyComponent } from './simpletiny.component';
import { TinyEditorComponent } from './tiny-editor/tiny-editor.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SimpletinyComponent,
    TinyEditorComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
