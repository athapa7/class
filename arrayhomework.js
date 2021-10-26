let numero = [[12, 20, 30], [12, 13, 14], [22, 33, 55]]
// Highest number from complete array
console.log('-----------------------------------------')
let largeNumero = numero.flat() //makes it into 1 aray
console.log(largeNumero.sort()) //Ascending order
console.log(largeNumero.sort().reverse()) //Desending order
Number1 = 0

for (i = 0; i < largeNumero.length; i++) {
    if (largeNumero[i] > Number1) {
        Number1 = largeNumero[i]
    }

}
console.log(Number1)


console.log('*******************************************************')


let car = [
    {
        make: "BMW",
        model: "M8",
        feature: ["fast", "expensive", "cool"]

    },

    {
        make: "Mercedes",
        model: "E65S AMG",
        feature: ["fast", "expensive", "cool"]

    },


    {
        make: "Nissan",
        model: "Altima",
        feature: ["Average", "Affordable", "Nice"]

    }
]

//print name/make and skill/model for every student in array


for (let i = 0; i < car.length; i++) {
    for (let key in car[i]) {

        if(key == 'make' || key == 'feature'){
            console.log(`${key}: ${car[i][key]}`)
        }
      
    }
}


