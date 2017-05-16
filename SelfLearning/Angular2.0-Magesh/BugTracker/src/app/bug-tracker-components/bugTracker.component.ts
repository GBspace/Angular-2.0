import { Component } from '@angular/core';
import { IBug } from './Model/IBug';
import { BugOperationService } from './services/BugOperation.service';

@Component({
    selector : 'bug-tracker',
    templateUrl : './bug-tracker.component.html'
})
export class BugTrackerComponent{
    constructor(private _bugOperation : BugOperationService){
    }
    
    bugs : Array<IBug> = [];
    
    onAddClick(newBugName : string){
        
        //var newBug = {name : newBugName, isClosed : false};
        var newBug = this._bugOperation.createNew(newBugName);
        this.bugs.push(newBug);
    }
    onBugClick(bug : IBug){
       // bug.isClosed = !bug.isClosed;
        this._bugOperation.toggle(bug);
        console.log("Bug toggled");
        
    }
    
    removeClosedBug(){
      for (let index = this.bugs.length-1; index >=0; index--) {
          if(this.bugs[index].isClosed){
             this.bugs.splice(index,1);
             }
      }
    }
    
    getClosedCount(){
        let closedCount = 0;
         for (let index = this.bugs.length-1; index >=0; index--) {
          if(this.bugs[index].isClosed){
             ++closedCount;
             }
      }
        return closedCount;
    }
}
