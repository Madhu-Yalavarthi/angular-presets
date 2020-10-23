import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkModule } from './cdk.module';
import { MaterialModule } from './material.module';
import { Dialogs } from './dialogs';
import { Pages } from './pages';
import { DIRECTIVES } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    Pages,
    Dialogs,
    DIRECTIVES
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CdkModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
