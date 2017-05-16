let EmployeeOuter = (function(){
    let sym = Symbol();
class Employee{
    constructor(id,name){
    // this.__id = id;  //id is made private variable 
    
    this[sym] = id;
     this.name = name;
    }
    
    get id(){
     console.log("GETTER");
     return this[sym];
    }
    
    set id(value){
        console.log("SETTER");
        if(value < 0){
            console.log("NEGATIVE VAlue");
        }else{
             this[sym] = id;
            
        }
        
    }
    
    display(){
        console.log(`ID is ${this.id} , name is ${this.name}`);
    }

}
export Employee;  //If export is not there, the class is considered as private
