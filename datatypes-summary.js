// primitive 

// 7 types: String , Number, Boolean , null , undefined , Symbol , BigInt ,

const score = 100;
const scoreValue = 100.3;

const inLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')
console.log(id === anotherID)

const bigNumber = 567648646853n;
console.log(typeof(bigNumber))
// Reference (Non Primitive)

// Array , Objects, Funtions 

const heros = ["Shivaji", "naagraj" , "doga"]
let myObj ={
    name : "suhas",
    age: 22,
}
console.log(typeof myObj);

const myfunction = function(){
      console.log("Hello World");
// myfunction()
      
}
myfunction()