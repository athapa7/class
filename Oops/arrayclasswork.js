let students =  [

    {
        fullName:"chinmay deshpande",
        age:12,
        skills:["python","java","javascript"],
        marks:300,
        city:"pune"

    },

    {
        fullName:"amol rao",
        age:23,
        skills:["python","java","javascript","jquery"],
        marks:200,
        city:"nagpur"

    },
    {
        fullName:"shaddha",
        age:26,
        skills:["python","java","html","css"],
        marks:100,
        city:"mumbai"

    },
    {
        fullName:"poorva deshpande",
        age:12,
        skills:["java","javascript"],
        marks:300,
        city:"pune"

    }


]
console.log("---------------------------")
// name of person with city mumbai 

let mum = students.filter(function(el){
    return el.city="mumbai"
})

console.log(mum)

// aveage age of all students 

let avgAge = students.reduce(function(acc,el){
    return acc+el.age
},0)/students.length

console.log(avgAge)

// average marks of all students 

let mavg = students.reduce(function(acc,el){
    return acc+el.marks
},0)/students.length

console.log(mavg)

// add country:"India" to all students 

students.forEach(function(el){
    el.country="India"
})
console.log(students)

// name to be printed with number of skills 

students.forEach(function(el){
    console.log(el.fullName,el.skills.length)
})

// name of person with python skill and is in pune

let person1 = students.filter(function(el){
    return el.city =="pune" && el.skills.includes('python')
})
console.log(person1)

// add skills "Project Management" to all students
students.forEach(function(el){
    el.skills.push('Project Management')
})
console.log(students)

// find the name of person with length greater than 5
let nameLength = students.filter(function(el){
    return el.fullName.length>5
})

console.log(nameLength)

//find all the person with pune as city

let pCity = students.filter(function(el){
    return el.city =="pune" 
})
console.log(pCity)


//find all the person with age > 20
let pAge = students.filter(function(el){
    return el.age > 20 
})
console.log(pAge)


//validate wheather every person is above 10

let above10 = students.every(function (el) {
    return el.age > 10 
})
console.log(above10)
//validate some person is above 10

let someabove20 = students.some(function (el) {
    return el.age > 20 
})
console.log(someabove20)

//find indexes of person with python skill

let pythoIndex = students.filter(function (el,index) {  
    if(el.skills.includes('python')){
        return index
    }
})
console.log(pythoIndex)

//sort the objects alphabetically - wrong question

//reverse the order of skill for every student

students.forEach(function(el){
    return el.skills.reverse()
})
console.log(students)

//remove the first skill of every student
students.forEach(function(el){
    el.skills.shift()
})
console.log(students)

//add the skills at the beginning of each student

students.forEach(function(el){
    el.skills.unshift('C#')
})
console.log(students)


// check wheather every student includes 'javascript" as skill

let iJavascript = students.filter(function(el){
    return el.skills.includes('javascript') 
})
console.log(iJavascript)