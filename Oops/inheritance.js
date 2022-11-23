// --------- Inheritance

class Student{
    country = "India"
    constructor(fn,ln,ssn){
        this.firstName = fn
        this.ln = ln
        this.ssn = ssn
    }
    display(){
        console.log(this.firstName)
    }

}

class Teacher extends  Student {

    // you can inherite property method from parent classßß

    setSalary(amount){
        this.getSalary = amount
    }
    
    getSalary(){
        console.log(this.getSalary)
    }
    
}



let rrr = new Teacher("dsf",34434,5534534)