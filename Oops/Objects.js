//This Human1 is alos an object -- every object in JS has one prototype property
// const Human1 = function(fullName,age,rollNumber){
//     this.fullName=fullName
//     this.age=age
//     this.rollNumber=rollNumber
//     this.display=function(){
//         console.log("Display Method inside Human")
//     }
    
// }

// let anish2 = new Human1("Anish",34,1)
// let anish3 = new Human1("Anish1",35,2)

// console.log(anish2)  
// console.log(anish3)

// console.log(anish2 instanceof Human1) //true
// console.log(anish2.hasOwnProperty('fullName')) //true

//Inbuilt method (hasOwnProperty)






//Object created thrugh class using function will show display()

// class Human {
//     constructor(fullName, age, roll) {
//         this.fullName = fullName
//         this.age = age
//         this.roll = roll
//     }

//     display(){
//         console.log("This is inside Human Class")
//     }
// }

// let anish = new Human("Anish",34,1)
// let anish1 = new Human("Anish1",35,2)

// console.log(anish)
// console.log(anish1)


const Human1 = function(fullName,age,rollNumber){
    this.fullName=fullName
    this.age=age
    this.rollNumber=rollNumber
    Human1.prototype.display=function(){   ///PROTOTYPE
        console.log("Display Method inside Human")
    }
    
}

Human1.prototype.test=function(){
    console.log("outside")
}

let anish2 = new Human1("Anish",34,1)
let anish3 = new Human1("Anish1",35,2)

console.log(anish2)  
console.log(anish3)
anish2.display()
anish3.display()
anish2.test()

console.log(anish2 instanceof Human1) //true
console.log(anish2.hasOwnProperty('fullName')) //true


let names = ["anihs","thapa"]
console.log(names.reverse())

let come ="names"
console.log(come)

//everyone has one property is prototype
//everything in JS is object