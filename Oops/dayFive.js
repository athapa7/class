//templete to create object

//1. Function Cconstructor
//2. ES6 Class
//3. Object Create

//1. Function Constructor

function Person(fullName,rollNo,age){
    this.fullName=fullName,
    this.rollNo=rollNo,
    this.age = age
}

let anish = new Person("Ansih",1,23)
console.log(anish)


//2. ES6 Class

class Vehicle{
    country = undefined
    registration = null
}

let audi = new Vehicle()
let lexus = new Vehicle()

//Three ways you can change the properties values

    // update the object 
    audi.country="Germany"
    audi.engine="automatic"

    //----------//

    //using constructor (set the field value at the time of object creation)

    class Vehicle2{
        constructor(country,registration){
            this.country=country,
            this.registration=registration
        }
    }

    let audi2 = new Vehicle2("USA",123)
    let lexus2 = new Vehicle2("Japan",2)

    console.log(audi2)

    //------------------------//
    //using set

    class Vehicle3{
      
        setCountry(country){
            this.country=country
        }
        setRegistration(registration){
            this.registration=registration
        }

    }
    //this. - refers to the current calling object
    let audi3 = new Vehicle3()
    let lexus3 = new Vehicle3()

    audi3.setCountry("Nepal")
    audi3.setRegistration(1)

    console.log(audi3)

    //--------------INHERITANCE------------------

    // on child object, we can call the properties and method of the parent class
    //advantage - helps to reduce code complexity and repetition of code

    //----Polymorphism
    //overloading and overriding

    // class Student{
    //     country = "Nepal"
    //     constructor(fullName,age){
    //         this.fullName=fullName,
    //         this.age=age
    //     }
    //     display(){
    //         console.log(this.fullName)
    //     }
    // }

    // class Teacher extends Student{

    // }

    // let chinmay = new Teacher("chinmay",23)
    // console.log(chinmay.age)
    // chinmay.display()

    //---------------------------------------

    class Student{
        country = "Nepal"
        constructor(fullName,age){
            this.fullName=fullName,
            this.age=age
        }
        display(){
            console.log(this.fullName)
        }
    }

    class Teacher extends Student{
        constructor(fullName,age,salary){
            super(fullName,age)
            this.salary=salary
        }
        //override- same method name, different class, same signature
        display(){
            console.log(this.salary)
        }

        //overloading - same method, same class , different signature

        add(a,b,c){
            // console.log(a)
            // console.log(b)
            // console.log(c)

            if(a!= undefined && b != undefined && c != undefined){
                console.log(a+b+c)
            }

            else if(a!= undefined && b != undefined){
                console.log(a+b)
            }
            else{
                console.log("incorrect input")
            }
        }
    }

    let chinmay = new Teacher("chinmay",23)
    console.log(chinmay.age)
    chinmay.display()
    chinmay.add()
    chinmay.add(1,2,3)
    chinmay.add(1,2)

    

