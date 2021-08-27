// Index ... HTML 
//If you want to show text on html page, we will have to use mark up language -- html

// CSS -- is used to change property of the defult elements and add design

//javescript -- to change something based on the user actions like click, moveover, mouse out, onPageload

//search for element
//what is element? -  in this case "<button>Add</button>"    

//opening html tag attributes = value ---- text --- closing html tag
//<button color ="red" class="yellow">

let addButton = document.querySelector('button')
let lineTwo = document.querySelector('h2')

console.log(addButton)
console.log(lineTwo.textContent) //returns text between opening and closing tag.. so it will print "Line 2"

//lineTwo.textContent ="Anish"//Changes "Line 2" to "Anish"



//action - call back function -- (create,update,retrive, delete html elements)

// addButton.addEventListener('click',function(){
//     lineTwo.style.color="red"
//     lineTwo.textContent="Anish"
//     lineTwo.style.backgroundColor="yellow"
// })


// program 2
//search for the element
//based on user actions -- call back function -- either update,create, retrive or delete

//SEARCH ELEMENT 
//1. BY TAG -- document.querySelector('h1')

//2. seach the element BY CSS= class and id
//what is class and what is id  --attributes
// id -- ID is unique -- is applied when you want unique styling across single html element
//class --class is common --is applied when yoou want common whenever you want common styling across multiple html elements

let pList = document.querySelectorAll('.red') //will return NODE LIST with 3 elements --> similar to array--[element1.element2.element3]
console.log(pList)
pList[0].style.color="purple"

for(let i=0;i<pList.length;i++){
    pList[i].style.color="purple"
}

addButton.addEventListener('click',function(){
    for(let i=0;i<pList.length;i++){
        pList[i].style.color="red"
    }
})


document.querySelectorAll('#green')




//HTML element is also an object

// let test ={
//     fullName:"Anish",
//     age:32
// }
// //retrive
// console.log(test.fullName)
// console.log(test.age)
// //add property
// test.language="Nepali"
// //update
// test.fullName="Anish Thapa"
// //delete
// delete test.age