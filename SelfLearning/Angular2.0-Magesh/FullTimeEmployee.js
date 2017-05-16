class fullTimeEmployee extends Employee{
constructor(id,name,salary){
    super(id,name);
    this.salary = salary;
}
    display(){
        console.log("DISPLAY of FULLTIMEEMployee ");
        console.log(`id= ${this.id} , name is ${this.name} , salary is ${this.salary}`);
    }
}


export default fullTimeEmployee;

//specific exports will also work.

