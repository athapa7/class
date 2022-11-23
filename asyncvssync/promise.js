let pro = new Promise ((reject,resolve)=>{

    let a = 1 + 2

    if (a===3){
        resolve('promise is completed')
    }
    else{
        reject('promise not resolved')
    }
    
})

pro.then((message)=>{
    console.log(message)
    console.log("hello")
}).catch((message)=>{
    console.log(message)
    console.log('please find the proper element')
})
    
