function sayMyName(){
    console.log("A")
    console.log("m")
    console.log("i")
    console.log("t")
}

//sayMyName                                      // we call him Refrence
sayMyName()                                    // we call him Exucation

// function addTwoNumber(number1, number2) {
//     console.log(number1, number2);              //wherw number 1 and number2 is a parameters 
// }

function addTwoNumber(number1, number2) {              //wherw number 1 and number2 is a parameters  
    // let result = number1+ number2;
    // return result;                
    
    return number1 + number2
    
}
const result = addTwoNumber(2,4)
console.log(result)                             // when we will called a function when we will call him argument



function logedInPerson(username){
return `${username} is loged in now`

}

console.log(logedInPerson("Amit"))