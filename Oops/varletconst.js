// //var and let and const 

// //var is function scoped

// // both h are different


// var h = 300

// // function add(){

// //     var h = 200
// //     console.log(h)

// // }
// // add()
// // console.log(h)


// // var h = 300

// // function add(){

// //      h = 200
// //     console.log(h)

// // }
// // add()
// // console.log(h)

// // const ---- block scoped

// // const a = 123

// // if(true){
// //     const b = 456
// // }

// // {
// //     const c = 455;
// // }

// // console.log(a) // 234
// // console.log(b)
// // console.log(c)

// // let is also blocked scoed 

// // Module design pattern

// // const CarModule = ()=>{
// //     let milestone = 0;
// //     let speed = 0;

// //     const accerate = (amount)=>{
// //         speed = speed + amount

// //     }
// //     const getMilestone = (mile)=> milestone+mile;
// //     return { accerate , getMilestone}

// // }

// // const testcase = CarModule()
// // testcase.accerate(2)
// // testcase.accerate(4)
// // testcase.getMilestone()

// //CarModule = 12

// class  CarModule {

//     constructor(){
//         this._milestone = 0;
//         this._speed = 0;
//     }

//     accerate = (amount)=>{
//         this._speed = this._speed + amount
//     }

//     getMilestone = (mile)=> this._milestone+mile;

// }

// let aa= new CarModule()
// aa.accerate(12)
// aa.getMilestone(23)

// // _ its a private variable
// aa._milestone = 34
// console.log(aa._milestone)

// we can achevice -- moduel design pattern 

// function --> define variable ----> function access ther

// -----------------> abstraction
//world -----> save()    loan()
// Abstraction - data hiding -- validation
// sbi  --- save()
// pnb - loan()

//let and const // 2016

(function(){
    console.log('hello')
})();

(function(a,b){
    console.log(a+b)
})(12,23);


// start --- IIFE functions 
// Oops -- data privacy 
// medule design , class 
// (actual priacy) --- > _ 2017
// public , private 
// more // let and const -- block scope only








// Modern way writing object 



// let dd = function(){
//     console.log(`dd`)
// }


// let human = {

//     age:10,
//     display:function(){
//         console.log('hello')
//     },
//     dd

// }

let students = [
    {
        fullName:"chinmay deshpande",
        age:12,
        skills:["python3","javascript","c++"],
        city:"pune",
        //username:"chinmay-deshpande"

    },
    {
        fullName:"ram singh",
        age:23,
        skills:["java","ruby","c++"],
        city:"jaipur"

    },

    {
        fullName:"poorva vyas",
        age:33,
        skills:["python","java","c++","html"],
        city:"pune"

    }

]

// //[{
//     // fullName:"chinmay deshpande",
//     // age:12,
//     // skills:["python","javascript","c++"],
//     // city:"pune"

// //}]

// // find user with city

// let yy = students.filter(function(el){
//     return el.city == "pune"
// })


// let rrrr = students.filter(function(el){
//     return el.city == "pune"
// })

// //console.log(rrrr)
// rrrr.forEach(function(el){
//     console.log(el.fullName)
// })


// students.filter(function(el){
//     return el.city == "pune"
// }).forEach(function(el){
//     console.log(el.fullName)
// })

// console.log('-------------------------------')

// // name of user with city pune and skills python
// students.filter(function(el){
//     return el.city == "pune" && el.skills.includes('python')
// }).forEach(function(el){
//     console.log(el.fullName)
// })

// // total number of skills per person
// // chinmay:3
// console.log('----------------------')
// students.forEach(function(el){
//     console.log(`${el.fullName}-${el.skills.length}`)
// })

// // add datascience skills to every user

// students.forEach(function(el){
//     el.skills.push('datascience')
//     console.log(el.skills)
// })

// students.forEach(function(el){
//     el.skills.unshift('java')
//     console.log(el.skills)
// })

// // average age for all users 

// let rrr = students.reduce(function(acc,el){
//     return acc + el.age
// },0)/students.length
// console.log(rrr)

// // skills of users starting with name 'c'

// students.filter(function(el){
//     return el.fullName.startsWith('c')
// }).forEach(function(el){
//     console.log(el.skills)
// })

// // replace first two skills of user to "new" , "new"
// // ["new","new","python"]

// students.map(function(el){

//     el.skills[0]="new"
//     el.skills[1] = "new"

// })
// console.log(students)

// students.map(function(el){
//     el.skills.splice(0,2,"new","new")
// })
// console.log(students)

// replace all skills to "learning"
// students.map(function(el){
//     el.skills.fill("learning",0,el.skills.length)
// })
// console.log(students)

//------------------------

// students.map(function(el){
//     el.skills.sort()
// })
// console.log(students)

// reverse the skill for every user 

// students.map(function(el){
//     el.skills.reverse()
// })
// console.log(students)


// check whether every user is adult ?

// let rrr = students.every(function(el){
//     return el.age > 20
// })

//  check whether some user are above few
// let rrr = students.some(function(el){
//     return el.age > 20
// })


let rr = [12,[33,44,55777,77]].flat()
let ta = [2,3,4]
let ra = [55,66]
console.log(ta.concat(ra))


//-----------------------

// print only first two skills
// students.forEach(function(el){
//    console.log(el.skills.slice(0,2))
// })

// // print only last skills
// console.log('----')
// students.forEach(function(el){
//     console.log(el.skills.slice(-1))
//  })
 
//"chinmay deshpande".split() , ["chinmay","deshpande"].join("-")
// chinmay-deshpande

students.forEach(function(el){
    el.username = el.fullName.split(" ").join("-")
})
console.log(students)

let aaaa = ["apple","banana","rr","apple"]

// aaaa.indexOf('apple')
// aaaa.indexOf('ccc')
// aaaa.firstIndexOf('apple')
// aaaa.lastIndexOf('apple')
// let rrrry = aaaa.map(function(el,index){
//     if(el == "apple"){
//         return index
//     }
// })

// console.log(rrrry)

// let rryu = rrrry.filter(function(el){
//     return el != undefined
// })
// console.log(rryu)