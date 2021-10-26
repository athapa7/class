// max min value  from array
// ["chinmay","poorva","sarika"] // ["yamnihc","varoop","akiras"]
// "i am new js" // reverse the string
// let g = "book"

// {
// /    'b':1,
//        'o':2,
//        'k':1


// }

// array,string , number , boolean , object , class , Dom html element

// maps and sets

// maps are similar to object

// the map key can hold multiple datatypes

let human = {
    age: 13,
    rollNo: 67,
  };
  
  human = {
    age: 13,
    rollNo: 67,
  };
  
  // human = {
  
  //     [1,2,4]:13,
  //     true:67,
  //     {'age':10,h:'6'}
  
  // }
  
  //
  
  let a = new Map();
  console.log(a);
  let names = ["chinmay", "poorva", "abhisha", "qwerty"];
  let parents = { father: "shirish", mother: "kanchan" };
  
  a.set("john", "admin");
  a.set(true, "new to js");
  a.set(names, "friends");
  a.set(parents, "family");
  a.set(2, "house");
  console.log(a);
  
  // retrive the value from the object
  
  console.log(a.get(2));
  // let h = "amol"
  // let j = [1,5,6,6]
  console.log(a.size);
  
  a.delete(true);
  console.log(a);
  
  // a.clear()
  // console.log(a)
  
  console.log(a.has(3));
  
  // loop through map
  
  let b = new Map([
    ["john", "developer"],
    ["amol", "tester"],
    ["ram", "BA"],
    ["sham", "FrontEnd Developer"],
  ]);
  // loop
  
  for(let key of b.keys()){
      console.log(key)
  }
  
  for(let val of b.values()){
      console.log(val)
  }
  
  for(let [key,val] of b.entries()){
      console.log(key,val)
  }
  // set ------------------->
  
  
  let setA = new Set()
  
  setA.add('apple')
  setA.add('apple')
  setA.add('mango')
  setA.add('grapes')
  console.log(setA)
  console.log(setA.size)
  
  //{ 'apple', 'mango', 'grapes' }
  console.log(setA.has('apple'))
  setA.delete('grapes')
  console.log(setA)
  
  // setA.clear()
  // console.log(setA)
  
  // loops
  
  
  for(let val of setA.values()){
      console.log(val)
  }
  
  for(let [val,values] of setA.entries()){
      console.log(val , values)
  }
  
  // how to add multiple values inside a set 
  
  let setB = new Set(['apple','Apple','grapes','chiku','papaya','apple'])
  console.log(setB.size)
  
  // remove the duplicate val from the array
  
  
  // let k = ['apple','Apple','grapes','chiku','papaya','apple']
  
  // let vb = new Set(k)
  
  // let hhh = [...vb]
  
  // console.log(hhh)
  
  
  let yyyy = [1,1,3,55,66,55]
  let uel =[] // [1]
  for(let i = 0 ; i < yyyy.length ;i++){
  
      if(uel.indexOf(yyyy[i]) < 0){
          uel.push(yyyy[i])
      }
      
  
  }
  console.log(uel)
  
  // max min value  from array
  // ["chinmay","poorva","sarika"] // ["yamnihc","varoop","akiras"]
  // "i am new js" // reverse the string
  // let g = "book"
  
  // {
  // /    'b':1,
  //        'o':2,
  //        'k':1
  
  
  // }