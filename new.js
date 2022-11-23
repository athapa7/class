if (3=="3") {
    console.log("true")
}
else{
    console.log("false")
}


console.log("**** Palindrum*******")

function palindromeTest(num1){
    let revNum1 = num1.toString().split('').reverse().join('')
    if (num1 == revNum1){
        console.log("This is Palindrum")
    }
    else{
        console.log("not Palindrum")
    }
}
palindromeTest(12321)

console.log("***largest number in array")

let array = [2,5,1,23,4,54,6]

let number = 0

for (i=0;i<array.length;i++){
    if(array[i]>number){
        number = array[i]
    }
}
console.log(`The largest number is ${number}`)
for (i=0;i<array.length;i++){
    if(array[i]<number){
        number = array[i]
    }
}
console.log(`The smallest number is ${number}`)



