
//let x = 10 /number
//let y = true /boolean
//let name = "anish" /string
//let person = ["anish"] /array

//OBJECTS are defined inside curly brakets ---holds property and value
//object DOES NOT store the value by index

let person = {
    fName: "Anish",
    lName: "Thapa",
    age:34,
    rollNo: 007
}

//ways to retrive the value from object

//1. Dot Notation -- objectname.property name --does not work on For loop

console.log(person.fName)
console.log(person.lName)

//2. Bracket Notation --objectname['property name']

console.log(person['fName'])
console.log(person['rollNo'])


person = {
    fName: "Anish",
    lName: "Thapa",
    age:34,
    rollNo: 007
}

//update the value for object

person.fName ="Mukku"
person.rollNo=13
console.log(person.fName)
console.log(person["rollNo"])


//add property

person.language = "nepali" //this will add language as property in the object
console.log(person)
console.log(person.language)

//for loop

for(let x in person){ 
    console.log(x,person[x])
}

console.log("****************************")

let students =[
    {
        fullName:"Anish Thapa",
        rollNumber:1
    },

    {
        fullName:"Mukku Sharma",
        rollNumber:2
    },

    {
        fullName:"Sharma Thapa",
        rollNumber:3
    }
]

console.log(students[0])
console.log(students[0].fullName)
console.log(students[0]['fullName'])

for(i =0; i < students.length;i++){
    console.log(students[i].fullName)
}
console.log('-----------------------------------')

for(i =0; i < students.length;i++){
    let obj = students[i]
    
    for(let key in obj){
        console.log(key,obj[key])
        console.log(`${key} : ${obj[key]}`)
    }    
}

console.log("---------------------------------------------")

let car = {
    make:"toyota",
    model:"camry",
    year: 2020
}

for(let key in car){
    console.log(`${key} =`,car[key])
}

