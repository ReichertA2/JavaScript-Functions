//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function objectParser(obj){
for (const [key, value] of Object.entries(obj)){
    if (Array.isArray(value)){
        for (const [key1, value1] of Object.entries(value)){
            if (typeof value1 === 'object'){
                objectParser(value1)
                
            }else{
                console.log(`My favorite ${key} is ${value1}`)
            }  
        }
    }else{
        console.log(`My favorite ${key} is ${value}`)
    }
    }
}
objectParser(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age){
    this.name=name;
    this.age=age
    
    }
    
    Addage(){
        this.age++
    }

    Addage3(){
        for (let i=0; i<3; i++){
            this.age++
        }
        
    }
    

    printInfo = function(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }
    
}


let steven = new Person('Steven', 21)
console.table(steven)
steven.printInfo()
let sarah = new Person('Sarah', 14)
console.table(sarah)
sarah.printInfo()
sarah.Addage()
console.log(sarah.age)

steven.Addage()
console.log(steven.age)
steven.Addage()
console.log(steven.age)

sarah.Addage3()
console.log(sarah.age)

// =============Exercise #3 ============//


    // Create a Promised based function that will check a string to determine if it's length is greater than 10.
    // If the length is greater than ten console log "Big word". 
    // If the length of the string is less than 10 console log "Small Number"

    const StringLength = (str) =>{
        return new Promise(
            (resolve, reject)=>{
                if(str.length > 10){
                    resolve("Big word")
                }else{
                    reject("Small Number")
                }
            }
        )
    }
    
    
    
    StringLength("awesome").then(
        (result)=>{
            // if resolved/accepted
            console.log(result)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
    
        )

