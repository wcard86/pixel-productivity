import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Store stuff
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Reducers


import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { environment } from '../environments/environment.prod';
import { reducers, metaReducers } from './reducers';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    OverviewComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx pixel-productivity App',
      logOnly: environment.production,
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
