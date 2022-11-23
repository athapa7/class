let functionOne = function(){
    setTimeout(function(){
         console.log('code starts here')
        alert('I am in alert as of now')
        console.log('code ends here')
    },3000)
    
   
}

let functionTwo = function() {
    console.log('please notice me!!!')
}

functionOne()
functionTwo()