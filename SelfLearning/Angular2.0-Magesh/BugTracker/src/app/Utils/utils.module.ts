import { NgModule } from '@angular/core';
import { TrimTextPipe } from './trimText.pipe';
import { SortPipe } from './sort.pipe';


@NgModule({
  declarations: [
    TrimTextPipe,
    SortPipe,
  ],
  exports: [ 
      TrimTextPipe,
      SortPipe,],
  providers: [],
 
})
export class UtilsModule { }
