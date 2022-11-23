class Person {
    fullName = null
    age = null
    rollNumber= null
}

let anishA = new Person()
let anishB = new Person()
//updating outside the class
// anishA.age=23
// anishB['age']= 25

// console.log(anishA)
// console.log(anishB)


//using constructor 

//setting the properties of the object at the time of object creation
//Constructer never returns the value, just sets the value

class Person1 {

    language = "Nepali"
    constructor(fullName,age,rollNumber){
        this.fullName = fullName
        this.age= age
        this.rollNumber = rollNumber
    }

    display(){
        console.log(this.fullName)
        return this.fullName
    }

}

let anishC = new Person1("Anish",35,1)
console.log(anishC)
anishC.display()

//--------------------------------------------------//

let students = [new Person1("anish",34,32),
                new Person1("mason",3,2),
                new Person1("nirvan",4,3)
                ]

students.map(function(el){
    for (let [key,value] of Object.entries(el)){
        console.log(key,value)
    }
})

//two ways of setting property of an object

//#1 is utside the class
//#2 is unsing constructor at the time of object creation
//#3 is using set and get method


class PersonC{
    language="English"

    setFullName(fn){
        this.fullName = fn
    }

    getFullName(){
        return this.fullName
    }

    setage(ag){
        this.age = ag
    }

    getage(){
        return this.age
    }

    setrollNum(roll){
        this.rollNumber = roll
    }

    getrollNumber(){
        return this.rollNumber
    }
}

let anishD = new PersonC()

anishD.setFullName("Anish T")
console.log(anishD.getFullName())