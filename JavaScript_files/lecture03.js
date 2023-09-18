// primitive datatypes

// 7 String, Boolean, Null, Undefined, Symbol, Number, BigInt 

//Reference  {non-primitive datatypes}

//Arrey, Object, functions

//**********stack**********


let myName = "Amit sharma";

let anotherName = myName

anotherName = "antim";


console.log(myName);
console.log(anotherName);

//**********Heap**********

const userOne = {
      email: 'as245666@gmail.com',
      upi: 'fhsdfdfgfgh'
};


const userTwo = userOne

userTwo.email = "aswe23.fgu";

console.log(userOne);
console.log(userTwo);