//datatype ----array!!

let city = ["pune", "nagpur", "mumbai"]

console.log(city[0])
console.log(city[city.length - 1])

city[1] = "jaipur" //this will replace "nagpur" with "jaipur"
console.log(city)

//---printing every element inside arrays 

let fruits = ['apple', 'mango', 'banana', 'papaya']
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// let fruits =['apple','mango','banana','papaya']
// for(let i = fruits.length -1 ; i >= 0; i--)
// {
//     console.log(fruits[i])
// }

//---------------------------------------------------------------------------------------------------//
//ARRAY METHODS
//Methods - Action & Return

//PUSH --- Adding the element at the last and returns length --41
//POP - Remove element from the last and it will return the element --48
//Unshift = add the element in front of the array and returns length --54
//Shift - remove element from the beginning & returns element --60
//Reverse -- reverses the array and retrns array - this does not change the original array in general --68
//MAP -- works with every element of array array, returns array ---92
//FILTER --works with every element of the array, use to filter out (like bigger than a certain number), returns array -111
//REDUCE -- returns single value like s=0--179
//FIND --used to find a particular object (first occurant) --259
//FINDINDEX -- used to find Index of the particular object (first occurance) -265
////Every -- meaning every value has to meet the condition --271
//SOME -- meaning as long as one value meets the copndition, we are good --272
////forEach -- does not return anything --map,filter --if u try to return it comes undefined --289
//SORT -- //SORT --- Sort sorts it out .... = .sort() -- 297
//FLAT -- if an array has multiple arrays then this will make it into 1 single array -- 302
//FILL -- will fill items in array with what every you want it to fill with --325
//SLICE -- will slice array... .slice(1,5) or (-1) or (1) --331
//Concat -- will join 2 arrays ----- 340
//INCLUDE -- wii return boolean - does it include? 348
//SPLICE -- .splice(1,2,"","") -- will return the ones it replaced/deleted --348
//JOIN -- joins array and returns string---- 357

//------------------------------------------------------------------------------------------------------//
//PUSH --- Adding the element at the last and returns length

let veg = ["potato", "cabbage", "turnip"]
let aa = veg.push('giner') //this returns length-- it adds ginger to array and returns the length
console.log(aa) //this will say "4"
console.log(veg)
let sada = "hello world"
veg.push(sada)
console.log(veg)

// POP - Remove element from the last and it will return the element

let bb = veg.pop() //this will remove ginger and it will return string - 'ginger' .. it will show what it returned
console.log(bb)
console.log(veg)

//Unshift = add the element in front of the array and returns length

let cc = veg.unshift("broccolli") //will add borccolli at the beginning and will return length
console.log(cc)
console.log(veg)

//Shift - remove element from the beginning & returns element

let dd = veg.shift() //removes the element from the beginning and returns the element (broccolli)
console.log(dd) //it wil show broccolli
console.log(veg)

console.log('********************************************')

//REVERSE!! 

let country = ['nepal', 'india', 'pakistan', 'bhutan']
let ee = country.reverse()
console.log(ee)
console.log(country)

ee = country.reverse().pop() //this will return bhutan
console.log(ee)

console.log('-------------------------------------------')

let birthyear = [2000, 2001, 1989, 1990]
let ages = []

for (let i = 0; i < birthyear.length; i++) {
    let age = 2021 - birthyear[i]
    ages.push(age)
}
console.log(ages)

console.log('********************************************************')


//MAP - Works with every element of array ! Returns array

let jj = birthyear.map(function (currentElement, index, arr) {
    console.log(currentElement, index, arr)  ///so the first time it will show ..2000 0 then the entre array
    return 2021 - currentElement
})

console.log(jj)

let names = ["anish", "mukku", "dipesh"]
//["welcome anish!", welcomes mukku!, welcome dipesh!]

let nn = names.map(function (el) {
    return `Welcome ${el}!`
})

console.log(nn)
console.log('****************************************************')

//FILTER - works with every element of the array, use to filter out (like bigger than a certain number), returns array

//AGE over 15
let ag = [21, 20, 17, 13, 12]
let ag15 = []

for (let i = 0; i < ag.length; i++) {
    if (ag[i] > 15) {
        ag15.push(ag[i])
    }
}

console.log(ag15)

let aaa = ag.filter(function (el) {
    return el > 15
})

console.log(aaa)

let JustAnish = ["anish", "mukku", "sharma thapa"].filter(function (el) {
    return el == "anish" //this will return the array with "anish" only
})

console.log(JustAnish)

//find just odd numbers

let odd = [23, 34, 55, 66, 77, 88]
// let oddN = odd.filter(function(el){
//     return el % 2 !==0
// })

let oddN = odd.filter((el) => el % 2 !== 0) //using arrow function

console.log(oddN)

console.log('************************************************')

//find individual length and combined
// let languages = ["nepali","hindi","english"]
// let lanLength = 0

// for (let i = 0; i < languages.length; i++)
// {
//     console.log(languages[i].length)
//     lanLength = lanLength + languages[i].length
// }
// console.log(lanLength)
// console.log('----------------------------------------------------')



// console.log('----------------------------------------------------')

//average age

let dages = [12, 13, 15, 16, 18]
let sum = 0

for (let i = 0; i < dages.length; i++) {
    sum = sum + dages[i]
}
console.log(sum / dages.length)

console.log('----------------------------------------------------')

//REDUCE - acumulative value/curret element/index/array ---acc value is like sum =0

let avg = dages.reduce(function (acc, el, index, arr) {
    return acc + el
}, 0) //value of acc is "0"

console.log(avg / dages.length)

let lenghtNam = ["anish", "mukku", "sharma thapa"].reduce(function (acc, el) {
    return acc + el.length
}, 0)

let lengthNa = ["anish", "mukta"].reduce((acc, el) => acc + el.length, 0)

console.log(lenghtNam)
console.log(lengthNa)



/*

let newArray = arraynName.map(funcntion(current element, index, array)
{
    returns statement
})

let newArray = arrayName.filter(function(current element, index, array){
    returns statement with condition
})

let newArray = arrayName.reduce(function(accumilative value,current element, index, array){
    returns statement
},0)

*/


let transactions = [1000, -100, 500, -300, -400, 800, 4000, -3000]

let deposit = transactions.filter((el) => el > 0).reduce(function (acc, el) {
    return acc + el
}, 0)
console.log(deposit)


console.log("------------------------------------")

let car = [
    {
        make: "BMW",
        model: "M8",
        feature: ["fast", "expensive", "cool"]

    },

    {
        make: "Mercedes",
        model: "E65S AMG",
        feature: ["fast", "expensive", "cool"]

    },


    {
        make: "Nissan",
        model: "Altima",
        feature: ["Average", "Affordable", "Nice"]

    }
]

//print name and skill for every student in array




//FIND Method --used to find a particular object (first occurant)
let car1 = car.find(function (el) {  //(el,index,array)
    return el.make == "Nissan"
})
console.log(car1)

//FIND INDEX
let car2 = car.findIndex(function (el) {  //(el,index,array)
    return el.make == "Nissan"
})
console.log(car2)

// Every    SOME --->> returns boolean
//Every -- meaning every value has to meet the condition
//SOME -- meaning as long as one value meets the copndition, we are good

let test11 = [11, 22, 33, 44, 55]

let test12 = test11.some(function (el) {
    return el > 50 //will return true because of 55
})

console.log(test12)

let test13 = test11.every(function (el) {
    return el > 50 //will return false
})

console.log(test13)

//forEach -- does not return anything --map,filter

let citiess = ["kathmandu", "houston", "gotham", "metropolis"]
citiess.forEach(function (el, index, arr) {
    console.log(`welcome ${el}!`)
})


//SORT --- Sort sorts it out .... = .sort()
let hhh = ['AMG', 'M Series', 'RS Series','apples'] //does not work with higher or lower case 
hhh.sort()
console.log(hhh)

//FLAT 

let numero = [[12, 20, 30], [12, 13, 14], [22, 33, 55]]
console.log(numero[2][2]) //will print 55

// Highest number from complete array
console.log('-----------------------------------------')
let largeNumero = numero.flat() //makes it into 1 aray
console.log(largeNumero)

let largestNumber = 0
for (i = 0; i <= largeNumero.length; i++) {
    if (largestNumber < largeNumero[i]) {
        largestNumber = largeNumero[i]
    }

}
console.log(largestNumber)
console.log('----------------------------------------------')


//FILL
let rrr = [1, 2, 3, 4, 6, 7, 8, 9]
console.log(rrr.fill("a", 4, rrr.length)) //it prints 1,2,3,4,a,a,a,a


//SLICE
let hhhh = ["anish", "sharma", "thapa"]
console.log(hhhh.slice(-2)) //Sharma Thapa
console.log(hhhh.slice(1)) // Sharma Thapa
console.log(hhhh.slice(1, 2)) // Sharma


//CONCAT

let qa = [1, 2, 3, 4]
let qb = [5, 6, 7]
console.log(qa.concat(qb)) // 1234567

//INCLUDE

let names3 = ["anish", "mukku", "thapa"]
console.log(names3.includes("anish")) //true
console.log(names3.includes("sharma")) //false 

//SPLICE
//slice(starting point,no of deletion, replace with what)
console.log(names3.splice(1, 2, "sharma", "thaapa")) //returns what it changed .. so will return "mukku, thapa"
console.log(names3)

//Join
let names2 = ["hello","world","!!!","enjoy"]
console.log(names2.join(" ")) //hello world !!! enjoy
console.log(names2.join()) //hello,world,!!!,enjoy
