 // max min value  from array

    let ArrayA = [10,20,30,15,7]
    let maxValue = 0
    let minValue = ArrayA[0]

    for(let i = 0; i < ArrayA.length;i++){
        if (ArrayA[i] > maxValue){
            maxValue = ArrayA[i]
        }

        if (ArrayA[i] < minValue){
            minValue = ArrayA[i]
        }
    }

    console.log(`Max Value is ${maxValue}`)
    console.log(`Min value is ${minValue}`)



  // ["chinmay","poorva","sarika"] // ["yamnihc","varoop","akiras"]

    let names = ["chinmay","poorva","sarika"]
 
    console.log(names.join(" ").split("").reverse().join("").split(" ").reverse())
    
   
  
  
  // "i am new js" // reverse the string

  let name1 = "i am new js"
  let reverseString = ""
  for(let i = name1.length-1; i>=0;i--){
      reverseString = reverseString + name1[i]
  }
  console.log(reverseString)
    

  // let g = "book"
  
  // {
  // /    'b':1,
  //        'o':2,
  //        'k':1
    
  // }

  let g = "book"
  let gArray = g.split("")
  let gObject= new Map()

  for(let i = 0 ; i < gArray.length ;i++){
    let count = 0
    for(let j = 0; j < gArray.length;j++){
        if(gArray[i] == gArray[j]){
            count = count + 1;
       }
    }
    gObject.set(gArray[i],count)
}

console.log(gObject)











  