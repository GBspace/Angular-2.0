import { Component } from '@angular/core';
import { SalaryComponentModel } from './SalaryComponentModel';

@Component({
  selector: 'salaryCalculator',
  templateUrl: './SalaryCalculator-template.html'
})
export class SalaryCalculatorComponent{
   calculator : SalaryComponentModel = new SalaryComponentModel();
}