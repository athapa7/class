//STRING in js ..collection of character

//String stores the character by Index

let city ='Houston'
console.log(city) 
console.log(city.length)//should say 7

//0 1 2 3 4 5 6
//H O U S T O N

//Methods of String

function sub(x,y){
    return x + y
}
let r = sub(12,13)
console.log(r)
console.log(typeof r)

let city2 = "Nagpur"
let i = city2.toUpperCase
console.log(i) //shows NAGPUR in capital
console.log(typeof i)
i = "Nepal".toUpperCase().toUpperCase().length
//This will return a number so cannot use the function that is for string
console.log(i) //This should show 5



let fullName ='chimany'

let city3 = 'Maharashtra'


console.log(city3.length -1) // should show 10
console.log(city3[city.length - 1]) 


//0 1 2 3 4 5 6 
//c h i n m a y 

//last index is always length - 1. 
//property

//method - action - covert every character in Uppercase
// return - type -string

//printing every character of the string


//Use loops

// for(intitialization; conditionCheck; increment/decrement){
//     //statmement
// }
//initilization --- condition check --- print --- increment/decrement


for(let i = 0; i < 5; i++){
        console.log(i)
}

let state = "Maharashtra"

let length = state.length

for(let i = 0; i < length; i++){
    console.log(state[i])
}

for(let i = length - 1; i >= 0; i--){
    console.log(state[i])
}

//reverse string
let city5 = "pune"
let reverseString = ""
for(let i = city5.length-1; i>=0;i--){
    reverseString = reverseString + city5[i]
}
console.log(reverseString)

//STRING 

//string + string -----> string
//string + number -----> string
// Number + string -----> string
// Number + Number -----> Number

let a = 10
let t = 20
let h = "add"

console.log(a+h+t) //10add20
console.log(a+t+h) //30add

//Program to count "o" character in string using "IF" condition
let fifthName = "Rohan Sooka"
let count = 0

for(i = 0 ; i< fifthName.length; i++){
    if (fifthName[i] == "o"){
    count = count + 1
    }
}
console.log(count)

//ways to print the string

console.log('I am new to js')
console.log("I am new to js")
console.log("'I am new to js'")
console.log('I am new to "js"')

let sixName = "amol"
let sevenName = "rao"

//string concatination
console.log(sixName+sevenName) //amolrao
console.log(sixName+ " " +sevenName) //amol rao

//string interpolation
let firstNaame = "chinmay"
let secondNaame = "deshpane"
console.log(`My firstname is ${firstNaame} and my last name is ${secondNaame}`) //use ${} and the quote is above "tab key" ``` backtick

// Every object has 2 things -- Properties and Method
//Property = Length

//Method =  //2 things about method - performs an action & and returns something

//Methods of Strings

let eightName = "amol"

//Action - to covert everything to upper case
//Return Type = String 

i = eightName.toUpperCase()
console.log(typeof i)
console.log(i)

let l = eightName.toLowerCase()
console.log(typeof l)
console.log(l)

l = eightName.toUpperCase().toLowerCase().length //l is 4 / number

//indexOf
let tenName = 'chinmayana'

let iNO = tenName.indexOf('h') //ACTION is to find the index of h -- return type is number "2"
let iNO2 = tenName.indexOf('e') //this will return "-1" because the string does not contain e
let iNO3 = tenName.indexOf('a') // this will show "5", first one
// let iNO4 = tenName.indexOf('a',6) //will search from 6th index so the answer will be 7 
//or
let iNO4 = tenName.indexOf('a',tenName.indexOf('a') + 1)
let iNO5 = tenName.indexOf('a', iNO4+ 1)

console.log(iNO)
console.log(iNO2)
console.log(iNO3)
console.log(iNO4)
console.log(iNO5)

console.log('----------------------------------------')

let fruits="apple grapes banana mango"
let useInput ="apple"

let indexF = fruits.indexOf(useInput)
if(indexF>=0){
    console.log('fruit is available')
}

else{
    console.log('fruit not available')
}

let rss = fruits.split(" ")
console.log(rss)

//Slice
//action- to get the sub string
//it returns me another string
// let textOne = "chinmay"
// //textOne.slice(start,end)
// console.log(textOne[0].toUpperCase+ textOne.slice(1,))//should print Chinmay..caital C


//0  1  2  3  4  5  6 
//C  H  I  N  M  A  Y
//-7 -6 -5 -4 -3 -2 -1         

let textTwo = "chinmay"
let textTwoB = textTwo.slice(4,6 )//---will only show MA
let textTwoC = textTwo.slice(0,4) //---will show CHIN
let textTwoD = textTwo.slice(4,)// will go till the end of the string and print .. MAY
console.log(textTwoB)
console.log(textTwoC)
console.log(textTwoD)

textTwo.slice(-6,5) //wil print HINM
textTwo.slice(6)// start point will be 0 so will print CHINMA


//SUBSTING
let textThree = "Mango"
console.log(textThree.substring(1,4))
console.log(textThree.substring(3)) //will get GO .. starts from 3!
console.log(textThree.substring(-1))//Shows Mango
console.log(textThree.substring(1,-1))//shows M

console.log(textThree.substr(-3)) //gives you last 3 characters using substr - NGO
console.log(textThree.substr(3)) //starts with 3 - GO
console.log(textThree.substr(-3,3))//still shows NGO
console.log(textThree.substr(0,2))
console.log('----------------------------')


//REPLACE
let textFour = "I am learning python"
console.log(textFour.replace('python','javascript')) //will switch python to javascript

//CONCAT - add to string

let textFive = "amol"
let textSix = "rao"

console.log(textFive + textSix) //amolrao
console.log(textFive + " " + textSix) //amol rao
console.log(textSix+textFive)//RaoAmol

console.log(textFive.concat(textSix)) //amolrao

let textSeven = " chinmay deshpande "
console.log(textSeven.length)//this will show 19, with the space
console.log(textSeven.trim().length) //will remove the forward and back spaces and show 16


//charAt (character at)

let textNine = "NewWords"
console.log(textNine.charAt(3)) //will show at index value 3..so W





// let h = ["chinmay","amol","amrit"]

// for(let i = 0; i < h.length ; i++){
//     console.log(h[i].concat(' Welcome'))
// }


//SPLIT

let word = "Hello World how you doing"
let uWord = word.split(" ")
console.log(uWord) //converts to array


