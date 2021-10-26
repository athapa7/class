// finding the element

let addButton = document.querySelector('#addButton')
let inputText = document.querySelector('#inputText')
let ulList = document.querySelector('#ulList')
console.log(ulList)


addButton.addEventListener('click', function () {

    let text = inputText.value
    let newElement = document.createElement('li')  // <li></li>
    newElement.textContent = text //<li>Apple </li>
    creatButton(newElement)
    ulList.appendChild(newElement)

})


function creatButton(newElement) {

    let remove = document.createElement('button') // <button></button>
    remove.textContent = "remove"  // <button> remove</button>
    remove.classList = "remove"  // <button class="remove"> remove</button>
    newElement.appendChild(remove)

    let up = document.createElement('button') // <button></button>
    up.textContent = "up"  // <button>up</button>
    up.classList = "up"  // <button class="up"> up</button>
    newElement.appendChild(up)

    let down = document.createElement('button') // <button></button>
    down.textContent = "down"  // <button>up</button>
    down.classList = "down"  // <button class="up"> up</button>
    newElement.appendChild(down)

}
 










// let person = {

//     age:34,
//     TreeWalker:function(){
//         console.log('hi')
//     }


// }


// person.age
// person.TreeWalker()













//tagName[attribute="value"] css selector












//<h1 id="headingOne" class="abc" namee="nameOne">Feature</h1>
// document.querySelector('h1')
// document.querySelector('#headingOne')
// document.querySelector('.abc')

// // tagName[attribute ='value']
// document.querySelector(h1[namee="nameOne"])
// document.querySelector(h1[id="headingOne"])
// document.querySelector(h1[class="abc"])