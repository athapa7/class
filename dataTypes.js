// string, array, class, boolean objects, number, htmlElement

//ES6 - Sets and maps -- and few additional syntax

let days = {
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
}


// let human ={
//     age:10,
//     rollNumber: 23,
//     days:days,
//     display: function(){
//         console.log('hello')
//     }
// }

human = {
    age: 10,
    rollNumber: 23,
    days, //no colon needed
    display() {
        console.log('hello')
    }
}

console.log(human)
human.display()


let obj = {
    'age': 10,
    'fullName': "Anish Thapa"
}

// //update
// obj.age=30
// obj['age'] = 34

// //add
// obj.language = "nepali"

// //delete

// delete obj.language

// //retrive
// obj['fullName']

let weekDays = {
    'day-1': 'monday',
    'day-2': 'tuesday',
    'day-3': 'wednesday',
    'day-4': 'thursday',
    'day-5': 'friday'
}

console.log(weekDays)

let weekDays2 = {}
//weekDays2['day-1'] = "monday"

let weekDaysA = ["mon", "tue", "wed", "thurs", "fri"]

for (let i = 0; i < weekDaysA.length; i++) {
    weekDays2[`day-${i + 1}`] = weekDaysA[i]
}


//Array

let names = ["anish", "thapa", "says", "hello"]
console.log(names)

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

for (let name of names) {
    console.log(name)
}

//new syntax for looping through object

let h = {
    'person': 10,
    'age': 20,
    'parent': {
        'name': 'dad'
    }
}

//dot nottion does not work on for loop

for (let key in h) {
    console.log(key, h[key])
}
//new way of looping through object

let anish = {
    'fullName': 'anish thapa',
    'rollNo': '1'
}

console.log(Object.keys(anish)) //print keys in array
console.log(Object.values(anish)) //print values in array

for (let key of Object.keys(anish)) {
    console.log(key)
}

for (let value of Object.values(anish)) {
    console.log(value)
}

console.log(Object.entries(anish)) //prints both keys and values in array

for (let entry of Object.entries(anish)) {
    console.log(entry)
}

// for (let[key,value] of Object.entries(anish.parent)){
//     console.log(key,value)
// }

// let quiz = {
//     'what is capital of Nepal': 'a',
//     'what is capital of india': 'b',
//     'what is capital of usa': 'c',
//     'what is capital of Canada': 'd',
// }

// //correct 4 -gold, 3- silver, 2 0r 1 bronze, 0 please try again
// let correctAns = 0 

// for(let[question,answer] of Object.entries(quiz)){
//     console.log(question,answer)

//     let userAnswer = promt(question)
//     if(userAnswer == answer){
//         correctAns = correctAns + 1
//     }
// }

// if(correctAns === 4){
//     console.log("gold")
// }
// else if(correctAns == 3 ){
//     console.log("silver")
// }
// else if(correctAns == 2 || correctAns ==1 ){
//     console.log("bronze")
// }
// else{
//     console.log("plesa try again")
// }


// Short Circuiting

//thruthy value and falsy value

//null ,0,undefined, 4<5, false -- falsy value

if (null) {
    console.log("hello")
}
else {
    console.log("false value")
}

if (0) {
    console.log("hello")
}
else {
    console.log("false value")
}

if (7 < 6) {
    console.log("hello")
}
else {
    console.log("false value")
}

//TRUE vlue.. '@', 1, -2 (any number beside 0),"String"

if (3) {
    console.log("hello")
}
else {
    console.log("false value")
}

//---------------

let b = 0 && 'hello' //&& operator gets short circuit when there is a false value
console.log(b)

let c = true && 'hello' && false && "ram" //value of C is "false"

// || operator gets short circuted when there is thruthy value

let d = 0 || 'e' || 'k' || true


//-----------------------------------------

//Switch case

//market -- buy

let userInput = "grapes"

switch (userInput) {
    case 'grapes':
        console.log('$10')

        break;
    case 'apple':
        console.log('$5')

        break;

    case 'mango':
        console.log('$15')

        break;

    case 'orange':
        console.log('$7')

        break;

    case 'Drgonfruit':
        console.log('$20')

        break;

    default:
        console.log("Fruit is not available")


}

