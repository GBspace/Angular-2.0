import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GreeterComponent } from './greeter/greeter.component' 

import { AppComponent } from './app.component';
import { SalaryCalculatorComponent } from './SalaryCalculator/SalaryCalculator.component';

@NgModule({
  declarations: [    
    AppComponent,
    GreeterComponent,
    SalaryCalculatorComponent
  ],
  imports: [        
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],     
  bootstrap: [AppComponent] 
})
export class AppModule { }     
