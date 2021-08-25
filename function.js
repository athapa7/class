//function

function add(x,y){
    return [x + y , x-y, x/y, x%y]
}

let h = add(12,33)

for(i = 0; i < h.length; i++){
    console.log(h[i])
}

//Write Functions in 3 days!

//1. Function DECLARATION 
function Addition(x,y){
    return x+y
}
let rr = Addition(33,22)
console.log(rr)

//2. Function EXPRESSION 

let Addition2 = function(x,y){  //value of Addition2 is the entire function
    return x+y
}
let rrr = Addition2(33,22)
console.log(rrr)

//3. ARROW function 

// let Addition3 = (x,y)=>  //you can also remove the curly brackets if it is only one line and delete return 
//     x+y

// let rrrr = Addition3(33,22)
// console.log(rrrr)

let Addition3 = (x,y)=>{  //you can also remove the curly brackets if it is only one line or nothing below it! 
    return x+y
}
let rrrr = Addition3(33,22)
console.log(rrrr)

console.log('-----------------------------------------')

// let addB = function(x,y){
//     return x*y
// }

// let a = addB(12,13)


// function addC(fn){
//     let f = fn(12,13)
//     return f
// }

// addC(addB)

//passing function as parameter to another function

let newA = function(x,y){
    return x+y
}

console.log(newA)
let ccc = newA(12,13)
console.log(ccc)

function newB(fn){
   let cccc =  fn(22,13)
   return cccc
}

let ccccc = newB(newA)
console.log(ccccc)


console.log('--------------------------')

let testA = function(x,y){
    return x + y
}

function testB(ln){
    return ln(12,10)
}

console.log(testB(testA))

console.log('-------------------------------')

