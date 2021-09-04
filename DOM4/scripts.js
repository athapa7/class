let htmlBody = document.querySelector('body')
console.log(htmlBody)

htmlBody.addEventListener('click',function(event){
    console.log(event.target) //will return html element
    console.log(event.target.tagName)
})

