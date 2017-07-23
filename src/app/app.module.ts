import { AppRoutingModule } from './app-routing.module';
import { AttendeeService } from './attendee.service';
import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule,
         MdCheckboxModule,
         MdIconModule,
         MdProgressSpinnerModule,
         MdCardModule,
         MdRadioModule,
         MdSliderModule       
} from '@angular/material';

import { AppComponent } from './app.component';
import { AttendeeComponent } from './attendee/attendee.component';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { BaseComponent } from './base/base.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendeeComponent,
    BaseComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ApiService),
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdCardModule,
    MdRadioModule,
    MdSliderModule
  ],
  providers: [AttendeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
