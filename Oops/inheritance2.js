//OOPS

//Encapsulation = Class
//Inheritance 

//Multi-level inheritance

// class GrandPa{
//     constructor (lastName, firstNameG){
//         this.lastName= lastName
//         this.firstNameG = firstNameG

//     }
        
//     display(){
//         console.log(this.firstNameG + " " + this.lastName)
//     }
    
// }

// class Father extends GrandPa{

//     setFirstName(name){
//         this.firstNameF = name
//     }
// }

// let son = new Father("Thapa","AnishJi")
// son.setFirstName("AnishF")

// console.log(son.firstNameF)
// console.log(son.lastName)
// console.log(son.firstNameG)

// son.display()

//------------------------------------------//

class GrandPa{
    constructor (lastName, firstNameG, jobG){
        this.lastName= lastName
        this.firstNameG = firstNameG
        this.jobG = jobG

    }
        
    display(){
        console.log(this.firstNameG + " " + this.lastName)
    }
    
}

//if both parents have constructor,, must user super and call the parent constructor fiorst
class Father extends GrandPa{

    constructor(lastName, firstNameG, jobG,firstNameF,jobF){
        super(lastName, firstNameG, jobG)
        this.firstNameF = firstNameF
        this.jobF = jobF
    }
   
    display(){
        console.log(this.firstNameF + " " + this.lastName)
        super.display()
    }
}

// let son = new Father("Thapa","AnishG","Banker","AnishF","MSR")
// son.display()

class Son extends Father{

    constructor(lastName, firstNameG, jobG,firstNameF,jobF,firstNameS,jobS){
        super(lastName, firstNameG, jobG, firstNameF, jobF)
        this.firstNameS = firstNameS
        this.jobS = jobS
    }
   
    display(){
        console.log(this.firstNameS + " " + this.lastName)
        super.display()
    }
}

let anish = new Son("Thapa","AnishG","Banker","AnishF","MSR","AnishS","QA")
anish.display()






