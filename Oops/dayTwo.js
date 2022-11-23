// properities

//1) Outside the class
//2) Using constructor 
//3) Using set and get method

class Bank{

    country = "India"

    // Defining the instance level properties
    constructor(fullName,accountNumber,accountType,Bal){
        this.fullName = fullName
        this.accountNumber = accountNumber
        this.accountType = accountType
        this.Bal = Bal
        this.transactions = []
    }

    // deposit method 

    depoist(amount){
        this.transactions.push(amount)
        this.Bal = this.Bal + amount
        return this.Bal
    }
    // withdraw

    withDrawl(amount){
        if(this.Bal > amount){
            this.transactions.push(-amount)
            this.Bal = this.Bal - amount
            return this.Bal
        }
        else{
            console.log('Insuffient funds')
        }
    }
    totalTransactions(arr){
        let ty = arr.reduce(function(acc,el,index,arr){
            return acc + Math.abs(el)

        },0)
        return ty
    }
    totalDepoist(arr){

        let gh = arr.filter(function(el){
            return el > 0
        }).reduce(function(acc,el){
            return acc + el
        },0)
        return gh
    }

    totalWithDraw(arr){

        let gh = arr.filter(function(el){
            return el < 0

        }).reduce(function(acc,el){
            return acc + el
        },0)
        return gh
    }


}

// instance variable

let r = new Bank("amolrao",12321,"saving",1000)
//let raa = new Bank("chinmay",22321,"current",800)

let depoOne = r.depoist(2000)
let wTwo = r.withDrawl(1500)
let depoThree = r.depoist(100)
let wThree = r.withDrawl(50)
let wFour = r.withDrawl(50)
let depoOneaa = r.depoist(2100)
let wTwos = r.withDrawl(600)
let depoThreess = r.depoist(169)
let wThreesss = r.withDrawl(150)
let wFoursssss = r.withDrawl(220)

console.log(r.transactions)

let rraa = r.transactions.slice(-5)
console.log(rraa)



console.log(r.transactions)

r.totalTransactions(r.transactions)
r.totalDepoist(r.transactions)
r.totalWithDraw(r.transactions)


// --------- Inheritance

class Student{
    country = "India"
    constructor(fn,ln,ssn){
        this.firstName = fn
        this.ln = ln
        this.ssn = ssn
    }
    display(){
        console.log(this.firstName)
    }

}

class Teacher extends  Student {

    // you can inherite property method from parent classßß

    setSalary(amount){
        this.getSalary = amount
    }
    
    getSalary(){
        console.log(this.getSalary)
    }
    
}



let rrr = new Teacher("dsf",34434,5534534)

// accessing the method and properties  from parent class
// calling the methods and properties on parent class object with child object


rrr.display()


// [100,-200,330,500,600]

// console.log(r)
// console.log(raa)

Math.abs(-50)/// 50
Math.abs(50) // 50