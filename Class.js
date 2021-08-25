//CLASS is userdefined DATATYPE

class Person{    
    fullName = null
    ssn = null
    age = null
    language = null;
}

//Setting the object property outside the class
let anish = new Person()
anish.age=35
console.log(anish.age)

let mukku = new Person()
mukku.language="nepali"
console.log(mukku.language)

// Fetch the value 
console.log(mukku['language'])
console.log(mukku.language) //object.propery

mukku.language = 'English' //object.property = new value


anish.language = "English"
anish.ssn="000-00-0000"
anish.age=35
anish.fullName ="thapa"
console.log(anish)

//setting the property at the time of object creation --inside person --- 2 ways

//Using CONSTRUCTOR - set the value of an object at the time of creation

class Person2{
    constructor(fn,rollno,lan,age,city){
        this.fullName = fn
        this.rollNumber = rollno
        this.language = lan
        this.age = age
        this.city = city
    }
}

let anish1 = new Person2("Anish",32,"English",33,"Houston")
console.log(anish1)
console.log(anish1.fullName) //will show Anish
let anish2 = new Person2("Mukku",31,"Nepali",31,"Dallas")
let anish3 = new Person2("Sharma",29,"Hindi",30,"Houston")

let sy = [anish1,anish2,anish3]

let avgAge = sy.reduce(function(acc,el){
    return acc + el.age

},0)

console.log(avgAge/sy.length)

let city1 = sy.find(function (el){  //(el,index,array)
    return el.city == "Houston"
})
console.log(city1) 

// #2 Setting the property for object using function

class Person3{
    fullName= null
    age = null
    setAge(ag){
        this.age = ag
    }
    setFullName(fn){
        this.fullName = fn
    }
}

let anish4 = new Person3()
anish4.setAge(23)
anish4.setFullName("Anish")
console.log(anish4)

//SETTING THE PROPERTIES 

//1. OUTSIDE THE CLASS 
//2. WHILE Creating Object using CONSTRUCTOR //most popular
//3. Using FUNCTION