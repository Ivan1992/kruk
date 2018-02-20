import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpletinyComponent } from './simpletiny.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
//import {MatTableDataSource} from '@angular/material';
import { MatCheckboxModule, MatFormFieldModule, MatTableModule, MatInputModule, MatGridListModule, MatOptionModule, MatSelectModule, MatButtonModule } from '@angular/material';


//import { KeysPipe } from './keys.pipe';
//import { LocalStorageModule } from 'angular-2-local-storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { KrukfilterPipe } from './krukfilter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SimpletinyComponent
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule, MatFormFieldModule, MatTableModule, MatInputModule, MatGridListModule, MatOptionModule, MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
//    MatTableDataSource,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
/*    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  }),*/
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
