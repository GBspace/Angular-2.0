import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UtilsModule } from './Utils/utils.module';
//import { BugTrackerComponent } from './bug-tracker-components/bugTracker.component';
//import { BugOperationService } from './bug-tracker-components/services/BugOperation.service';
//import { TrimTextPipe } from './bug-tracker-components/pipes/trimText.pipe';
//import { SortPipe } from './bug-tracker-components/pipes/sort.pipe';
//import { ClosedCountPipe } from './bug-tracker-components/pipes/closedCount.pipe';

import { BugTrackerModule } from './bug-tracker-components/bugTracker.module';

@NgModule({
  declarations: [
    AppComponent,
    //BugTrackerComponent,
    //ClosedCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilsModule,
    BugTrackerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
