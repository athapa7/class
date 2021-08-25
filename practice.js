// #1 Reverse the String 
//Input - chinmay
//output - yamnihc

let name1 = "chinmay"
let reverseString = ""
for(let i = name1.length-1; i>=0;i--){
    reverseString = reverseString + name1[i]
}
console.log(reverseString)
console.log('**************************************************')

// #2 Write a program to reverse only one word from sentence
// Input = "My new learning is javascript"
// Output = "yM wen gninrel si tpicsavaj"

let word = "My new learning is javascript"
function reverseWord(word){
    return word.split("").reverse().join("").split(" ").reverse().join(" ")  
    }    
    console.log(reverseWord(word))

    
console.log('**************************************************')

//3 Write a program to find the higest and lowest number from the given array
//Input = [34,55,-500,66,77,88,234,5,0,66,88]

let numArray = [34,55,-500,66,77,88,234,5,0,66,88]
let minNum = -501
let maxNum = 0

for(i =0; i < numArray.length; i++){
    if(minNum > numArray[i]){
        minNum = numArray[i]
    }
    if(maxNum < numArray[i]){
        maxNum = numArray[i]
    }
}

console.log(`Highest Number is ${maxNum}`)
console.log(`Lowest Number is ${minNum}`)

console.log('**************************************************')

// #4 Find the higest number from the given 2D array
//[1,2,3],[33[44[55],[55,77,343]

let DArray = [[1,2,3],[33,44,55],[55,77,343]]
let SArray = DArray.flat()
let higestNumber =0

for(i =0; i < SArray.length; i++){
  
    if(higestNumber < SArray[i]){
        higestNumber = SArray[i]
    }
}
console.log(`The Higest Number in the Array is ${higestNumber}`)

console.log('**************************************************')

// #5 Count the vowels from the String
//Input = "I am new to Javascript"

let vowelString = "I am new to Javascript"
let vString = vowelString.toLowerCase()
let vowelCount = 0

for(i =0; i < vString.length ; i++){
    if(vString[i] == "a" || vString[i] == "e" || vString[i] == "i" || vString[i] == "o" || vString[i] == "u"){
        vowelCount = vowelCount+1
    }
}
console.log(`Total Number of Vowel = ${vowelCount}`)




