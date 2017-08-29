import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpletinyComponent } from './simpletiny.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { KeysPipe } from './keys.pipe';

import { LocalStorageModule } from 'angular-2-local-storage';
import { FormsModule } from '@angular/forms';
import { KrukfilterPipe } from './krukfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SimpletinyComponent,
    KeysPipe,
    KrukfilterPipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  }),
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
