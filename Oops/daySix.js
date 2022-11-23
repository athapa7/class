//object.create method

const obj = {
    fullName: 'anish thapa',
    mov:[11,22,33,44,55],

    get total(){
        this.mov.reduce(function(acc,el){
            return acc+el
        })
    },

    set movement(amount){
        this.mov.push(this.amount)
    },

    display(){
        console.log("Hello")
    }
}

let r = obj.total
console.log(r)

obj.movement = 199
console.log(obj['mov'])

//-------------------- 3rd way to create an object in js---

//function constructor

// function Person(name,age){
//     this.name=name
//     this.age=age

//     this.display=function(){
//         console.log("hello")
//     }
// }

function Person(name,age){
    this.name=name
    this.age=age
}
Person.prototype.display = function(){
    console.log("Hello")
}

let amol = new Person("anihs",23)
let chinmay = new Person("mukta",22)

console.log(amol)
console.log(chinmay)
amol.display()

//every thing in js is an object
// every object asa ___proto___ property
//__proto__ is same as prototype of parent (or from where the object is derived)



//Object.create()

let pro = {
    init(fullName,birthYear){
        this.fullName=fullName
        this.birthYear=birthYear
    },

    calAge(){
        console.log(2021-this.birthYear)
    }
}

let r1 = Object.create(pro)
console.log(r1)
r1.birthYear=1991
r1.calAge()

r1.init("anish",1990)
r1.calAge()


//objects -- proto
//es6 classes -- inheritance , poly
//ways of setting class values
//object.create()
//function constructor