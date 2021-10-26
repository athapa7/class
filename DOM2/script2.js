//search element
//based on user actions --->call ----CRUD operation on html element

let list = document.querySelectorAll('li')
let ulList = document.querySelector('ul')


ulList.addEventListener('mouseover',function(){
    for(let i = 0; i<list.length; i++){
        if(i % 2 == 0){
            list[i].style.color="purple"
            list[i].textContent = list[i].textContent.toUpperCase()
        }
        else{
            list[i].style.color="green"
            list[i].textContent = list[i].textContent.toUpperCase()
        }
    }
})

// ulList.addEventListener('mouseout',function(){
//     for(let i = 0; i<list.length; i++){
//         if(i % 2 == 0){
//             list[i].style.color="purple"
//             list[i].textContent = list[i].textContent.toLowerCase()
//         }
//         else{
//             list[i].style.color="green"
//             list[i].textContent = list[i].textContent.toLowerCase()
//         }
//     }
// })

ulList.addEventListener('mouseout',function(){
    for(let i = 0; i<list.length; i++){
        if(list[i].textContent.length % 2 == 0){
            list[i].style.color="purple"
            list[i].textContent = list[i].textContent.toLowerCase()
        }
        else{
            list[i].style.color="green"
            list[i].textContent = list[i].textContent.toLowerCase()
        }
    }
})

