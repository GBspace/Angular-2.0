import { Component, OnInit } from '@angular/core';
import { IBug } from './Model/IBug';
//import { BugOperationService } from './services/BugOperation.service';
import { BugStorageService } from './services/BugStorage.service';

declare var fetch;

@Component({
    selector : 'bug-tracker',
    templateUrl : './bug-tracker.component.html'
})
export class BugTrackerComponent implements OnInit{
    
    ngOnInit(){
        fetch('http://localhost:3000/bugs')
        .then(response => response.json())
        .then((bugs) => this.bugs = bugs);
    }
    
    constructor(private bugStorage : BugStorageService){
//        this.populateTestData();
        this.bugs = this.bugStorage.getAll();
    }
    
    private populateTestData(){
//		this.bugs.push(this._bugOperation.createNew('Server communication error'));
//		this.bugs.push(this._bugOperation.createNew('User actions not recognized'));
//		this.bugs.push(this._bugOperation.createNew('Application not responding'));
//		this.bugs.push(this._bugOperation.createNew('Data integrity error'));
	}
    
    bugs : Array<IBug> = [];
    
//    onAddClick(newBugName : string){
//        
//        //var newBug = {name : newBugName, isClosed : false};
//        var newBug = this._bugOperation.createNew(newBugName);
//        this.bugs.push(newBug);
//    }
    
    onNewBug(newBugName : string){
//		var newBug = this._bugOperation.createNew(newBugName);
        var newBug = this.bugStorage.addNew(newBugName);
		this.bugs = [...this.bugs, newBug];
	}
    onBugClick(bug : IBug){
       // bug.isClosed = !bug.isClosed;
//        this._bugOperation.toggle(bug);
//        console.log("Bug toggled");
        this.bugs = this.bugs.map(bugInList => 
			bugInList === bug ? this.bugStorage.toggle(bug) : bugInList);
        
    }
    
    removeClosedBug(){
      for (let index = this.bugs.length-1; index >=0; index--) {
          if(this.bugs[index].isClosed){
            	this.bugStorage.remove(this.bugs[index]);
				this.bugs.splice(index, 1);
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
