//defining class and inheritance
//learn how it works in JS


let anish1 = {

    fullName:"Anish Thapa",
    rollNummber:23,
    display:function(){
        console.log("hello")
    }

}

anish1.fullName
anish1.rollNummber

anish1.display()

console.log(anish1)

class Person{
    constructor(fulName,rollNumber){
        this.fulName = fulName
        this.rollNumber = rollNumber
    }

    display(){
        console.log("hello")
    }
}

let person = new Person("Anish",11)
console.log(person)



//FUNCTION Constructor

let Person1 = function(fullName,rollNumber){
    this.fullName=fullName
    this.rollNumber=rollNumber
    this.display=function(){
        console.log("hello") //This keeps repeating so we need to find a way to get rid of this
    }

}

let anish2 = new Person1("Ansih",1)
console.log(anish2)

let anish3 = new Person1("Mukku",2)
console.log(anish3)

//--------------------------------------------

console.log(anish2 instanceof Person1) //will print true
console.log(anish2.hasOwnProperty("fullName")) //will print true
anish2.display()
