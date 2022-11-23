// // let amol = {
// //     age:10,
// //     rollNu:23,
// //     display:function(){
// //         console.log(`hello`)
// //     }

// // }
// // amol.display()

// class Person2{
//     constructor(age,rollNu){
//         this.age = age ,
//         this.rollNu =rollNu
//     }
//     display(){
        
//         console.log(`hello`)
//     }

// }
// //let amol = new Person2("age",12)
// // console.log(amol)


// // Construcor Function



// // person ---> protype

// // amol --->   proptype


// // let person = {

// //    prototype:{

// //         age:"ee",
// //         roll:"ff",
// //         display:function(){
// //             console.log('hello')
// //         } 

// //    }
// // }

// // person.prototype.display = function(){
// //     console.log('hello')
// // } 

// // const Person = function(fullName, age ,rollNumer){

// //     this.fullName = fullName
// //     this.age = age,
// //     this.rollNumer = rollNumer
 
// //     this.display = function(){
// //         console.log(`hello`)
// //     }

// // }
// // let amol = new Person("Archit",12,123)
// // let paras = new Person("paras",22,12445)
// // let ram = new Person2('abc',233)
// // console.log(amol)
// // console.log(paras)
// // Solution 

// const Person = function(fullName, age ,rollNumer){

//     this.fullName = fullName
//     this.age = age,
//     this.rollNumer = rollNumer
 
// }

// Person.prototype.display = function(){
//     console.log(`hello`)
// }

// let amol = new Person("Archit",12,123)
// let paras = new Person("paras",22,12445)
// let ram = new Person('abc',233,'333')
// amol.display()
// paras.display()
// console.log(amol)

// Human -----> everyobject in javascript has one prototype property

// const Human = function(fullName,age,rollNumber){
//     this.fullName = fullName
//     this.age = age 
//     this .rollNumber = rollNumber
//     this.display = function(){
//         console.log('human')
//     }

// }

// //console.log(Human)


// let amol = new Human("amol",12,333)
// let sa = new Human("sa",12,333)
// console.log(amol)



//console.log(sa)
// console.log(amol instanceof Human)
// console.log(amol.hasOwnProperty('fullName'))

// Inbuilt method




class Human2{

    constructor(fullName,age,roll){

        this.fullName = fullName
        this.age = age
        this.roll = roll

    }

    display(){
        console.log('human')
    }

}


let amol2 = new Human2("amol",12,333)
let sa2 = new Human2("sa",12,333)
console.log(amol2)
console.log(sa2)

amol2.display()



// const Human = function(fullName,age,rollNumber){
//     this.fullName = fullName
//     this.age = age 
//     this .rollNumber = rollNumber
// }

// Human.prototype.display = function(){
//     console.log('hello')
// }




// let amol = new Human("amol",12,333)
// let sa = new Human("sa",12,333)
// amol.display()
// console.log(amol)
// console.log(sa)
// sa.display()


let names = ["amol","ram"] // --->Array ---< reduce
console.log(names.reverse())

let come = "names"
console.log(come)

//come --- String ----> toUpperCase() 
// everything in js object 
// every has one property is prototype 
// console.log(amol instanceof Person )
// console.log(ram instanceof Person )
// console.log(amol.hasOwnProperty('fullName'));
//-----------
// Object - Methods and properties

//------------------------------------>

//Reaming oops -->
//framework  -- POM -- BDD