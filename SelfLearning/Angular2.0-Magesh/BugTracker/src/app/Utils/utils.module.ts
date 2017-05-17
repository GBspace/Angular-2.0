import { NgModule } from '@angular/core';
import { TrimTextPipe } from './trimText.pipe';
import { SortPipe } from './sort.pipe';
import { ElapsedPipe } from './elapsed.pipe';


@NgModule({
  declarations: [
    TrimTextPipe,
    SortPipe,
    ElapsedPipe
  ],
  exports: [ 
      TrimTextPipe,
      SortPipe,
      ElapsedPipe
  ],
  providers: [],
 
})
export class UtilsModule { }
