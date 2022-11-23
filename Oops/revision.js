class Person{
    //constructor -- we can set instance variable

    constructor(fullName,age,roll,marks){
        this.fullName = fullName
        this.age=age
        this.roll= roll
        this.marks=marks        
    }

    //Instance method

    displayName(){
        console.log(this.fullName)
    }
}

let anish = new Person("Anish Thapa",34,1,100)

//POM - page object model