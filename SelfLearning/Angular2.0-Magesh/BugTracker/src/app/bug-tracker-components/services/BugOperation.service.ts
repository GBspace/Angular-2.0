import { IBug } from "../Model/IBug";
export class BugOperationService{
    createNew(bugName : string ) : IBug {
        var newBug : IBug = {
            name : bugName,
            isClosed : false
        };
        return newBug;
    }
    toggle(bug : IBug) : void {
        bug.isClosed = !bug.isClosed;
    }
} 