//let x = 10
//let y = 20

//console.log(x) //its like printing/showing. should show "10"

//x = 100
//console.log(x)
//console.log(x+100)
//console.log(x+y)

//let and const - let and constant (2 ways to define the variable)

//Basic Number
let x = 10
console.log(x)
console.log(typeof x) //what type of value is "x"..should say "number"
console.log('--------------------------------------------------------')

//Bollean Value (true or value) can only hold 2 values

let isAbove18 = true
console.log(isAbove18)//should should "true" 
console.log(typeof isAbove18)//should show "bollean"
console.log('--------------------------------------------------------')

let firstname = "Anish"
console.log(firstname)//shoult show anish
console.log(typeof firstname)//should show string
console.log('--------------------------------------------------------')



//MODULUS -- shows remainder

console.log(40%3) //shows 1 because 1 is the remainder when you divide 40 by 3
console.log(56%12)
console.log("--------------------------------------------------------")

//Function and Arthimetic Function

let numOne = 20
let numTwo = 10
let numThree = 100
let numFour = 50

console.log(numOne + numTwo)
console.log(numOne - numTwo)
console.log(numOne * numTwo)
console.log(numOne / numTwo)
console.log(numOne % numTwo)

//If we want to do numFour + numFour then we have to run the same codes again so use "Functions" so that you DO NOT REPEAT THE CODE
console.log("--------------------------------------------------------")

//FUNCTION declaration 
//{} blocks

function calculator (x,y){
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}

calculator (100,50) //it is called = calling the function
console.log("--------------------------------------------------------")
calculator (3000, 1000)
console.log("--------------------------------------------------------")

//FUNCTION without parameter and no return type
// function cal(){
//     console.log(8+9)
// }
// cal()

//FUNCTION with parameter and without written type
// function cal(x,y){
//     console.log(x+y) --becuase we did not RETURN!!!!!
// }
// cal(5,3) -- This will just show and not store

//FUNCTION with PARAMETER and WRITTEN TYPE - This is more useful

function cal(x,y){
    return x + y
}
let a = cal(12,13)
console.log(a)




//Defining with LET keyword 

let firstName = "Anish" //can only update define by theh "let" command
firstName = "or is it?"
console.log(firstname)

//Defining with const keyword

//Everything is an object and object has methods and attributes/properties

const lastName = "Thapa"
console.log(lastName)
//lastName = "Sharma"
//console.log(lastName)//You will get an error if you try to change the constant value

//Methods --- do some action and they retuns something

// function add(x,y){
//     console.log(x+y)
// }
// let t = add(23.24) --- it will be undefined.. becauase it showed but does not store/return the value


let word = "My new learning is javascript"
function wordsReverser(word){
    return word.split("").reverse().join("").split(" ").reverse().join(" ")  
    }
    
    console.log(wordsReverser(word))

    let testtttt = "hello world !!!"
    function tester(testtttt){
        return testtttt.split("").join("")
    }
    console.log(tester(testtttt))