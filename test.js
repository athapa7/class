let names = ["job","mob","bob",'shop',"amol","rob","lob","new"]
// names.filter(function(el){
//     return el.endsWith("ob")
// })
// ["job","mob","bob","rob","lob"]
// 2 


let students = [
    {
        firstName:"chinmay",
        skills:["python","js","html"],
        city:"pune"

    },
    {

        firstName:"poorva",
        skills:["python","js","html"],
        city:"mumbai"

    },
    {

        firstName:"ram",
        skills:["c#","js","html"],
        city:"pune"

    }

]


//console.log(students.filter(s => s.skills.includes("python") && s.city === 'pune'))





// Make first letter capital of String

// user with city pune and skill python

//let k = "amol"
// Amol
// Make first letter capital of String

//console.log(k[0].toUpperCase()+k.slice(1))

//let y = [12,33,12,33,44,55,66,12]

//[12,33,44,55,66]


// Neela - 2.5 point
// Anish - 1 point 
// Aelina - 1 point



let amol = "hello i am chinmay"
// reverse first and last word of string
//"olleh i am yamnihc"

let splA = amol.split(" ")
for (let i = 0; i < splA.length; i++) {
  if (i == 0 || i == splA.length - 1) {
    splA[i] = splA[i].split("").reverse().join("")
  }
}

console.log(splA.join(" "))


let y = [12,33,12,33,44,55,66,12]

//[12,33,44,55,66]
function getUnique(y){
    let uniqueArray = [];
    // Loop through array values
    for(i=0; i < y.length; i++){
        if(uniqueArray.indexOf(y[i]) === -1) {
            uniqueArray.push(y[i]);
        }
    }
    return uniqueArray;
}
let uniqueNumber = getUnique(y);
    console.log(uniqueNumber);



let name = "AbcAbCBNcNNaNNMMbbjk"
// count of all capital letters
// ascii for capital letters







//let amol = "hello i am chinmay"
//  let word = amol.split(" ")
//  let word1 = word.reverse().join(" ")
//  console.log(word1)
//  let newWord = " "
//  for (let i = word1.length - 1; i >= 0; i--) {
//      newWord = newWord + word1[i]
//  }
// console.log(newWord)


// let amola = 'hello i am chinmay'
// let amol1 = amola.split('').reverse().join('')                                          
// let amol2=amol1.split(' ').reverse().join (' ') 
// console.log(amol2)





// let k = "amol"
// let newK = k.charAt(0).toUpperCase() + k.slice(1)

// console.log(newK)

// console.log(k.charAt(0).toUpperCase()+k.slice(1,)