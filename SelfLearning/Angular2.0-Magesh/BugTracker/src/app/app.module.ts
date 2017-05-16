import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker-components/bugTracker.component';
import { BugOperationService } from './bug-tracker-components/services/BugOperation.service';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BugOperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
