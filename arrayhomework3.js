// to check number is prime number 

console.log("********Is it a Prime Number?********")

function primeNumber(num)
{

  if (num===1)
  {
    return "Not Prime";
  }
  else if (num < 0){
      return "Not Prime"
  }
  else if(num === 2)
  {
    return "Prime";
  }else
  {
    for(let i = 2; i < num; i++)
    {
      if(num % i === 0)
      {
        return "Not Prime";
      }
    }
    return "Prime";  
  }
}

console.log(primeNumber(7));
 
 

// to check number is palindrome  - 12321

console.log("**** Palindrum*******")

function palindromeTest(num1){
    let arr = num1.toString().split('')
    let revNum1 = arr.reverse().join('')
    if (num1 == revNum1){
        console.log("This is Palindrum")
    }
    else{
        console.log("not Palindrum")
    }
}
palindromeTest(12421)

// to check number is amstrong number - cube of the 3 numbers show be the sum of three
console.log("********* Armstrong Test********")
function armstrongTest(num2){
    let arr2 = num2.toString().split('')
    let sum = 0;
    let a;
    for(i = 0; i < arr2.length; i++){
        a = parseInt(arr2[i])
        sum = sum + (a*a*a)
    }
    if (sum == num2){
        console.log("It's Armstrong")
    }
    else{
        console.log("Not Armstrong")
    }
}
armstrongTest(153)

//  to check number is even or odd 
 console.log("****Even or Odd****")

 function evenOdd(num3){
     if (num3%2 == 0){
         console.log("it is even number")
     }
     else {
         console.log("it is odd number")
     }
 }

 evenOdd(5)


// to print even number between any range 10 - 20

console.log("**** Even between 10 -20 ****")

for (let i = 10; i <= 20; i++){
    if(i%2 ==0){
        console.log(i)
    }
}